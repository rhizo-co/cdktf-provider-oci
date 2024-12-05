# `dataOciOnesubscriptionOrganizationSubscriptions` Submodule <a name="`dataOciOnesubscriptionOrganizationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionOrganizationSubscriptions <a name="DataOciOnesubscriptionOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions oci_onesubscription_organization_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.NewDataOciOnesubscriptionOrganizationSubscriptions(scope Construct, id *string, config DataOciOnesubscriptionOrganizationSubscriptionsConfig) DataOciOnesubscriptionOrganizationSubscriptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig">DataOciOnesubscriptionOrganizationSubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig">DataOciOnesubscriptionOrganizationSubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.DataOciOnesubscriptionOrganizationSubscriptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.DataOciOnesubscriptionOrganizationSubscriptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.DataOciOnesubscriptionOrganizationSubscriptions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.DataOciOnesubscriptionOrganizationSubscriptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOnesubscriptionOrganizationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOnesubscriptionOrganizationSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOnesubscriptionOrganizationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionOrganizationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList">DataOciOnesubscriptionOrganizationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.organizationSubscriptions">OrganizationSubscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filter"></a>

```go
func Filter() DataOciOnesubscriptionOrganizationSubscriptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList">DataOciOnesubscriptionOrganizationSubscriptionsFilterList</a>

---

##### `OrganizationSubscriptions`<sup>Required</sup> <a name="OrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.organizationSubscriptions"></a>

```go
func OrganizationSubscriptions() DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionOrganizationSubscriptionsConfig <a name="DataOciOnesubscriptionOrganizationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

&dataocionesubscriptionorganizationsubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#compartment_id DataOciOnesubscriptionOrganizationSubscriptions#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#filter DataOciOnesubscriptionOrganizationSubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#id DataOciOnesubscriptionOrganizationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionOrganizationSubscriptionsFilter <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

&dataocionesubscriptionorganizationsubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#name DataOciOnesubscriptionOrganizationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#values DataOciOnesubscriptionOrganizationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#regex DataOciOnesubscriptionOrganizationSubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#name DataOciOnesubscriptionOrganizationSubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#values DataOciOnesubscriptionOrganizationSubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_organization_subscriptions#regex DataOciOnesubscriptionOrganizationSubscriptions#regex}.

---

### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

&dataocionesubscriptionorganizationsubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions {

}
```


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

&dataocionesubscriptionorganizationsubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionOrganizationSubscriptionsFilterList <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.NewDataOciOnesubscriptionOrganizationSubscriptionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionOrganizationSubscriptionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.NewDataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.NewDataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.NewDataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.isoCode"></a>

```go
func IsoCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.stdPrecision"></a>

```go
func StdPrecision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrency</a>

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.NewDataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get"></a>

```go
func Get(index *f64) DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference <a name="DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocionesubscriptionorganizationsubscriptions"

dataocionesubscriptionorganizationsubscriptions.NewDataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.totalValue">TotalValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.currency"></a>

```go
func Currency() DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsCurrencyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.totalValue"></a>

```go
func TotalValue() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionOrganizationSubscriptions.DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions">DataOciOnesubscriptionOrganizationSubscriptionsOrganizationSubscriptions</a>

---



