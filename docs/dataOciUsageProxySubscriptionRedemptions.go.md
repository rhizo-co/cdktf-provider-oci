# `dataOciUsageProxySubscriptionRedemptions` Submodule <a name="`dataOciUsageProxySubscriptionRedemptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionRedemptions <a name="DataOciUsageProxySubscriptionRedemptions" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions oci_usage_proxy_subscription_redemptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptions(scope Construct, id *string, config DataOciUsageProxySubscriptionRedemptionsConfig) DataOciUsageProxySubscriptionRedemptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig">DataOciUsageProxySubscriptionRedemptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig">DataOciUsageProxySubscriptionRedemptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetTimeRedeemedGreaterThanOrEqualTo">ResetTimeRedeemedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetTimeRedeemedLessThan">ResetTimeRedeemedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeRedeemedGreaterThanOrEqualTo` <a name="ResetTimeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetTimeRedeemedGreaterThanOrEqualTo"></a>

```go
func ResetTimeRedeemedGreaterThanOrEqualTo()
```

##### `ResetTimeRedeemedLessThan` <a name="ResetTimeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.resetTimeRedeemedLessThan"></a>

```go
func ResetTimeRedeemedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptions_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciUsageProxySubscriptionRedemptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciUsageProxySubscriptionRedemptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionRedemptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList">DataOciUsageProxySubscriptionRedemptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.redemptionCollection">RedemptionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedGreaterThanOrEqualToInput">TimeRedeemedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedLessThanInput">TimeRedeemedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedGreaterThanOrEqualTo">TimeRedeemedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedLessThan">TimeRedeemedLessThan</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.filter"></a>

```go
func Filter() DataOciUsageProxySubscriptionRedemptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList">DataOciUsageProxySubscriptionRedemptionsFilterList</a>

---

##### `RedemptionCollection`<sup>Required</sup> <a name="RedemptionCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.redemptionCollection"></a>

```go
func RedemptionCollection() DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `TimeRedeemedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeRedeemedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedGreaterThanOrEqualToInput"></a>

```go
func TimeRedeemedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeRedeemedLessThanInput`<sup>Optional</sup> <a name="TimeRedeemedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedLessThanInput"></a>

```go
func TimeRedeemedLessThanInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `TimeRedeemedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedGreaterThanOrEqualTo"></a>

```go
func TimeRedeemedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeRedeemedLessThan`<sup>Required</sup> <a name="TimeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.timeRedeemedLessThan"></a>

```go
func TimeRedeemedLessThan() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionRedemptionsConfig <a name="DataOciUsageProxySubscriptionRedemptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

&dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubscriptionId: *string,
	TenancyId: *string,
	Filter: interface{},
	Id: *string,
	TimeRedeemedGreaterThanOrEqualTo: *string,
	TimeRedeemedLessThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#subscription_id DataOciUsageProxySubscriptionRedemptions#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#tenancy_id DataOciUsageProxySubscriptionRedemptions#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#id DataOciUsageProxySubscriptionRedemptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.timeRedeemedGreaterThanOrEqualTo">TimeRedeemedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemptions#time_redeemed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.timeRedeemedLessThan">TimeRedeemedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#time_redeemed_less_than DataOciUsageProxySubscriptionRedemptions#time_redeemed_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#subscription_id DataOciUsageProxySubscriptionRedemptions#subscription_id}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#tenancy_id DataOciUsageProxySubscriptionRedemptions#tenancy_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#filter DataOciUsageProxySubscriptionRedemptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#id DataOciUsageProxySubscriptionRedemptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeRedeemedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.timeRedeemedGreaterThanOrEqualTo"></a>

```go
TimeRedeemedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemptions#time_redeemed_greater_than_or_equal_to}.

---

##### `TimeRedeemedLessThan`<sup>Optional</sup> <a name="TimeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsConfig.property.timeRedeemedLessThan"></a>

```go
TimeRedeemedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#time_redeemed_less_than DataOciUsageProxySubscriptionRedemptions#time_redeemed_less_than}.

---

### DataOciUsageProxySubscriptionRedemptionsFilter <a name="DataOciUsageProxySubscriptionRedemptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

&dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#name DataOciUsageProxySubscriptionRedemptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#values DataOciUsageProxySubscriptionRedemptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#regex DataOciUsageProxySubscriptionRedemptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#name DataOciUsageProxySubscriptionRedemptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#values DataOciUsageProxySubscriptionRedemptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemptions#regex DataOciUsageProxySubscriptionRedemptions#regex}.

---

### DataOciUsageProxySubscriptionRedemptionsRedemptionCollection <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

&dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection {

}
```


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

&dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems {

}
```


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

&dataociusageproxysubscriptionredemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionRedemptionsFilterList <a name="DataOciUsageProxySubscriptionRedemptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxySubscriptionRedemptionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.get"></a>

```go
func Get(index *f64) DataOciUsageProxySubscriptionRedemptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciUsageProxySubscriptionRedemptionsFilterOutputReference <a name="DataOciUsageProxySubscriptionRedemptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxySubscriptionRedemptionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.get"></a>

```go
func Get(index *f64) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.baseRewards">BaseRewards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.fxRate">FxRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceCurrency">InvoiceCurrency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceNumber">InvoiceNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceTotalAmount">InvoiceTotalAmount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redeemedRewards">RedeemedRewards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redemptionCode">RedemptionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redemptionEmail">RedemptionEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.timeInvoiced">TimeInvoiced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.timeRedeemed">TimeRedeemed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseRewards`<sup>Required</sup> <a name="BaseRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.baseRewards"></a>

```go
func BaseRewards() *f64
```

- *Type:* *f64

---

##### `FxRate`<sup>Required</sup> <a name="FxRate" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.fxRate"></a>

```go
func FxRate() *f64
```

- *Type:* *f64

---

##### `InvoiceCurrency`<sup>Required</sup> <a name="InvoiceCurrency" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceCurrency"></a>

```go
func InvoiceCurrency() *string
```

- *Type:* *string

---

##### `InvoiceNumber`<sup>Required</sup> <a name="InvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceNumber"></a>

```go
func InvoiceNumber() *string
```

- *Type:* *string

---

##### `InvoiceTotalAmount`<sup>Required</sup> <a name="InvoiceTotalAmount" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.invoiceTotalAmount"></a>

```go
func InvoiceTotalAmount() *f64
```

- *Type:* *f64

---

##### `RedeemedRewards`<sup>Required</sup> <a name="RedeemedRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redeemedRewards"></a>

```go
func RedeemedRewards() *f64
```

- *Type:* *f64

---

##### `RedemptionCode`<sup>Required</sup> <a name="RedemptionCode" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redemptionCode"></a>

```go
func RedemptionCode() *string
```

- *Type:* *string

---

##### `RedemptionEmail`<sup>Required</sup> <a name="RedemptionEmail" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.redemptionEmail"></a>

```go
func RedemptionEmail() *string
```

- *Type:* *string

---

##### `TimeInvoiced`<sup>Required</sup> <a name="TimeInvoiced" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.timeInvoiced"></a>

```go
func TimeInvoiced() *string
```

- *Type:* *string

---

##### `TimeRedeemed`<sup>Required</sup> <a name="TimeRedeemed" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.timeRedeemed"></a>

```go
func TimeRedeemed() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItems</a>

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.items"></a>

```go
func Items() DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItems</a>

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.get"></a>

```go
func Get(index *f64) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference <a name="DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemptions"

dataociusageproxysubscriptionredemptions.NewDataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection">DataOciUsageProxySubscriptionRedemptionsRedemptionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.items"></a>

```go
func Items() DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList">DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciUsageProxySubscriptionRedemptionsRedemptionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemptions.DataOciUsageProxySubscriptionRedemptionsRedemptionCollection">DataOciUsageProxySubscriptionRedemptionsRedemptionCollection</a>

---



