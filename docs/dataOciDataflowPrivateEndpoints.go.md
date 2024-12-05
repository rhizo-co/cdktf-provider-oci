# `dataOciDataflowPrivateEndpoints` Submodule <a name="`dataOciDataflowPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataflowPrivateEndpoints <a name="DataOciDataflowPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints oci_dataflow_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpoints(scope Construct, id *string, config DataOciDataflowPrivateEndpointsConfig) DataOciDataflowPrivateEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig">DataOciDataflowPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig">DataOciDataflowPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetDisplayNameStartsWith">ResetDisplayNameStartsWith</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetOwnerPrincipalId">ResetOwnerPrincipalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDisplayNameStartsWith` <a name="ResetDisplayNameStartsWith" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetDisplayNameStartsWith"></a>

```go
func ResetDisplayNameStartsWith()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetId"></a>

```go
func ResetId()
```

##### `ResetOwnerPrincipalId` <a name="ResetOwnerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetOwnerPrincipalId"></a>

```go
func ResetOwnerPrincipalId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataflowPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataflowPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataflowPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataflowPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataflowPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList">DataOciDataflowPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.privateEndpointCollection">PrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameStartsWithInput">DisplayNameStartsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.ownerPrincipalIdInput">OwnerPrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameStartsWith">DisplayNameStartsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.ownerPrincipalId">OwnerPrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.filter"></a>

```go
func Filter() DataOciDataflowPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList">DataOciDataflowPrivateEndpointsFilterList</a>

---

##### `PrivateEndpointCollection`<sup>Required</sup> <a name="PrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.privateEndpointCollection"></a>

```go
func PrivateEndpointCollection() DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DisplayNameStartsWithInput`<sup>Optional</sup> <a name="DisplayNameStartsWithInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameStartsWithInput"></a>

```go
func DisplayNameStartsWithInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OwnerPrincipalIdInput`<sup>Optional</sup> <a name="OwnerPrincipalIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.ownerPrincipalIdInput"></a>

```go
func OwnerPrincipalIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DisplayNameStartsWith`<sup>Required</sup> <a name="DisplayNameStartsWith" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.displayNameStartsWith"></a>

```go
func DisplayNameStartsWith() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnerPrincipalId`<sup>Required</sup> <a name="OwnerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.ownerPrincipalId"></a>

```go
func OwnerPrincipalId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataflowPrivateEndpointsConfig <a name="DataOciDataflowPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

&dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	DisplayNameStartsWith: *string,
	Filter: interface{},
	Id: *string,
	OwnerPrincipalId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#compartment_id DataOciDataflowPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name DataOciDataflowPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.displayNameStartsWith">DisplayNameStartsWith</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name_starts_with DataOciDataflowPrivateEndpoints#display_name_starts_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#id DataOciDataflowPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.ownerPrincipalId">OwnerPrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#owner_principal_id DataOciDataflowPrivateEndpoints#owner_principal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#state DataOciDataflowPrivateEndpoints#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#compartment_id DataOciDataflowPrivateEndpoints#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name DataOciDataflowPrivateEndpoints#display_name}.

---

##### `DisplayNameStartsWith`<sup>Optional</sup> <a name="DisplayNameStartsWith" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.displayNameStartsWith"></a>

```go
DisplayNameStartsWith *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#display_name_starts_with DataOciDataflowPrivateEndpoints#display_name_starts_with}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#filter DataOciDataflowPrivateEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#id DataOciDataflowPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnerPrincipalId`<sup>Optional</sup> <a name="OwnerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.ownerPrincipalId"></a>

```go
OwnerPrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#owner_principal_id DataOciDataflowPrivateEndpoints#owner_principal_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#state DataOciDataflowPrivateEndpoints#state}.

---

### DataOciDataflowPrivateEndpointsFilter <a name="DataOciDataflowPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

&dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#name DataOciDataflowPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#values DataOciDataflowPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#regex DataOciDataflowPrivateEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#name DataOciDataflowPrivateEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#values DataOciDataflowPrivateEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_private_endpoints#regex DataOciDataflowPrivateEndpoints#regex}.

---

### DataOciDataflowPrivateEndpointsPrivateEndpointCollection <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

&dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection {

}
```


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

&dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems {

}
```


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

&dataocidataflowprivateendpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataflowPrivateEndpointsFilterList <a name="DataOciDataflowPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowPrivateEndpointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataflowPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataflowPrivateEndpointsFilterOutputReference <a name="DataOciDataflowPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowPrivateEndpointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.dnsZones">DnsZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.maxHostCount">MaxHostCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.ownerPrincipalId">OwnerPrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.scanDetails">ScanDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsZones`<sup>Required</sup> <a name="DnsZones" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.dnsZones"></a>

```go
func DnsZones() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaxHostCount`<sup>Required</sup> <a name="MaxHostCount" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.maxHostCount"></a>

```go
func MaxHostCount() *f64
```

- *Type:* *f64

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `OwnerPrincipalId`<sup>Required</sup> <a name="OwnerPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.ownerPrincipalId"></a>

```go
func OwnerPrincipalId() *string
```

- *Type:* *string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.ownerUserName"></a>

```go
func OwnerUserName() *string
```

- *Type:* *string

---

##### `ScanDetails`<sup>Required</sup> <a name="ScanDetails" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.scanDetails"></a>

```go
func ScanDetails() DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems</a>

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsScanDetails</a>

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpointsPrivateEndpointCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference <a name="DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowprivateendpoints"

dataocidataflowprivateendpoints.NewDataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection">DataOciDataflowPrivateEndpointsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList">DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowPrivateEndpointsPrivateEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowPrivateEndpoints.DataOciDataflowPrivateEndpointsPrivateEndpointCollection">DataOciDataflowPrivateEndpointsPrivateEndpointCollection</a>

---



