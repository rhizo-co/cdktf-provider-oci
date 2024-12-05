# `dataOciUsageProxySubscriptionRedemption` Submodule <a name="`dataOciUsageProxySubscriptionRedemption` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionRedemption <a name="DataOciUsageProxySubscriptionRedemption" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption oci_usage_proxy_subscription_redemption}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

dataociusageproxysubscriptionredemption.NewDataOciUsageProxySubscriptionRedemption(scope Construct, id *string, config DataOciUsageProxySubscriptionRedemptionConfig) DataOciUsageProxySubscriptionRedemption
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig">DataOciUsageProxySubscriptionRedemptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig">DataOciUsageProxySubscriptionRedemptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetTimeRedeemedGreaterThanOrEqualTo">ResetTimeRedeemedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetTimeRedeemedLessThan">ResetTimeRedeemedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeRedeemedGreaterThanOrEqualTo` <a name="ResetTimeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetTimeRedeemedGreaterThanOrEqualTo"></a>

```go
func ResetTimeRedeemedGreaterThanOrEqualTo()
```

##### `ResetTimeRedeemedLessThan` <a name="ResetTimeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetTimeRedeemedLessThan"></a>

```go
func ResetTimeRedeemedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

dataociusageproxysubscriptionredemption.DataOciUsageProxySubscriptionRedemption_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

dataociusageproxysubscriptionredemption.DataOciUsageProxySubscriptionRedemption_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

dataociusageproxysubscriptionredemption.DataOciUsageProxySubscriptionRedemption_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

dataociusageproxysubscriptionredemption.DataOciUsageProxySubscriptionRedemption_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciUsageProxySubscriptionRedemption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciUsageProxySubscriptionRedemption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionRedemption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList">DataOciUsageProxySubscriptionRedemptionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedGreaterThanOrEqualToInput">TimeRedeemedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedLessThanInput">TimeRedeemedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedGreaterThanOrEqualTo">TimeRedeemedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedLessThan">TimeRedeemedLessThan</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.items"></a>

```go
func Items() DataOciUsageProxySubscriptionRedemptionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList">DataOciUsageProxySubscriptionRedemptionItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `TimeRedeemedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeRedeemedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedGreaterThanOrEqualToInput"></a>

```go
func TimeRedeemedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeRedeemedLessThanInput`<sup>Optional</sup> <a name="TimeRedeemedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedLessThanInput"></a>

```go
func TimeRedeemedLessThanInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `TimeRedeemedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedGreaterThanOrEqualTo"></a>

```go
func TimeRedeemedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeRedeemedLessThan`<sup>Required</sup> <a name="TimeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedLessThan"></a>

```go
func TimeRedeemedLessThan() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionRedemptionConfig <a name="DataOciUsageProxySubscriptionRedemptionConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

&dataociusageproxysubscriptionredemption.DataOciUsageProxySubscriptionRedemptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubscriptionId: *string,
	TenancyId: *string,
	Id: *string,
	TimeRedeemedGreaterThanOrEqualTo: *string,
	TimeRedeemedLessThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#subscription_id DataOciUsageProxySubscriptionRedemption#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#tenancy_id DataOciUsageProxySubscriptionRedemption#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#id DataOciUsageProxySubscriptionRedemption#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.timeRedeemedGreaterThanOrEqualTo">TimeRedeemedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemption#time_redeemed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.timeRedeemedLessThan">TimeRedeemedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_less_than DataOciUsageProxySubscriptionRedemption#time_redeemed_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#subscription_id DataOciUsageProxySubscriptionRedemption#subscription_id}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#tenancy_id DataOciUsageProxySubscriptionRedemption#tenancy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#id DataOciUsageProxySubscriptionRedemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeRedeemedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeRedeemedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.timeRedeemedGreaterThanOrEqualTo"></a>

```go
TimeRedeemedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemption#time_redeemed_greater_than_or_equal_to}.

---

##### `TimeRedeemedLessThan`<sup>Optional</sup> <a name="TimeRedeemedLessThan" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.timeRedeemedLessThan"></a>

```go
TimeRedeemedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_less_than DataOciUsageProxySubscriptionRedemption#time_redeemed_less_than}.

---

### DataOciUsageProxySubscriptionRedemptionItems <a name="DataOciUsageProxySubscriptionRedemptionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

&dataociusageproxysubscriptionredemption.DataOciUsageProxySubscriptionRedemptionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionRedemptionItemsList <a name="DataOciUsageProxySubscriptionRedemptionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

dataociusageproxysubscriptionredemption.NewDataOciUsageProxySubscriptionRedemptionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciUsageProxySubscriptionRedemptionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.get"></a>

```go
func Get(index *f64) DataOciUsageProxySubscriptionRedemptionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciUsageProxySubscriptionRedemptionItemsOutputReference <a name="DataOciUsageProxySubscriptionRedemptionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociusageproxysubscriptionredemption"

dataociusageproxysubscriptionredemption.NewDataOciUsageProxySubscriptionRedemptionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciUsageProxySubscriptionRedemptionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.baseRewards">BaseRewards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.fxRate">FxRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceCurrency">InvoiceCurrency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceNumber">InvoiceNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceTotalAmount">InvoiceTotalAmount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redeemedRewards">RedeemedRewards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redemptionCode">RedemptionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redemptionEmail">RedemptionEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.timeInvoiced">TimeInvoiced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.timeRedeemed">TimeRedeemed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems">DataOciUsageProxySubscriptionRedemptionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseRewards`<sup>Required</sup> <a name="BaseRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.baseRewards"></a>

```go
func BaseRewards() *f64
```

- *Type:* *f64

---

##### `FxRate`<sup>Required</sup> <a name="FxRate" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.fxRate"></a>

```go
func FxRate() *f64
```

- *Type:* *f64

---

##### `InvoiceCurrency`<sup>Required</sup> <a name="InvoiceCurrency" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceCurrency"></a>

```go
func InvoiceCurrency() *string
```

- *Type:* *string

---

##### `InvoiceNumber`<sup>Required</sup> <a name="InvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceNumber"></a>

```go
func InvoiceNumber() *string
```

- *Type:* *string

---

##### `InvoiceTotalAmount`<sup>Required</sup> <a name="InvoiceTotalAmount" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceTotalAmount"></a>

```go
func InvoiceTotalAmount() *f64
```

- *Type:* *f64

---

##### `RedeemedRewards`<sup>Required</sup> <a name="RedeemedRewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redeemedRewards"></a>

```go
func RedeemedRewards() *f64
```

- *Type:* *f64

---

##### `RedemptionCode`<sup>Required</sup> <a name="RedemptionCode" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redemptionCode"></a>

```go
func RedemptionCode() *string
```

- *Type:* *string

---

##### `RedemptionEmail`<sup>Required</sup> <a name="RedemptionEmail" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redemptionEmail"></a>

```go
func RedemptionEmail() *string
```

- *Type:* *string

---

##### `TimeInvoiced`<sup>Required</sup> <a name="TimeInvoiced" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.timeInvoiced"></a>

```go
func TimeInvoiced() *string
```

- *Type:* *string

---

##### `TimeRedeemed`<sup>Required</sup> <a name="TimeRedeemed" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.timeRedeemed"></a>

```go
func TimeRedeemed() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciUsageProxySubscriptionRedemptionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems">DataOciUsageProxySubscriptionRedemptionItems</a>

---



