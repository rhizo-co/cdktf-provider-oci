# `dataOciOdaOdaPrivateEndpoints` Submodule <a name="`dataOciOdaOdaPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaPrivateEndpoints <a name="DataOciOdaOdaPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints oci_oda_oda_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.NewDataOciOdaOdaPrivateEndpoints(scope Construct, id *string, config DataOciOdaOdaPrivateEndpointsConfig) DataOciOdaOdaPrivateEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig">DataOciOdaOdaPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig">DataOciOdaOdaPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.DataOciOdaOdaPrivateEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.DataOciOdaOdaPrivateEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.DataOciOdaOdaPrivateEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.DataOciOdaOdaPrivateEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOdaOdaPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOdaOdaPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList">DataOciOdaOdaPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.odaPrivateEndpointCollection">OdaPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filter"></a>

```go
func Filter() DataOciOdaOdaPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList">DataOciOdaOdaPrivateEndpointsFilterList</a>

---

##### `OdaPrivateEndpointCollection`<sup>Required</sup> <a name="OdaPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.odaPrivateEndpointCollection"></a>

```go
func OdaPrivateEndpointCollection() DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaPrivateEndpointsConfig <a name="DataOciOdaOdaPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

&dataociodaodaprivateendpoints.DataOciOdaOdaPrivateEndpointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#filter DataOciOdaOdaPrivateEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}.

---

### DataOciOdaOdaPrivateEndpointsFilter <a name="DataOciOdaOdaPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

&dataociodaodaprivateendpoints.DataOciOdaOdaPrivateEndpointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#name DataOciOdaOdaPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#values DataOciOdaOdaPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#regex DataOciOdaOdaPrivateEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#name DataOciOdaOdaPrivateEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#values DataOciOdaOdaPrivateEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#regex DataOciOdaOdaPrivateEndpoints#regex}.

---

### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

&dataociodaodaprivateendpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection {

}
```


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

&dataociodaodaprivateendpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaPrivateEndpointsFilterList <a name="DataOciOdaOdaPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.NewDataOciOdaOdaPrivateEndpointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOdaOdaPrivateEndpointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get"></a>

```go
func Get(index *f64) DataOciOdaOdaPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOdaOdaPrivateEndpointsFilterOutputReference <a name="DataOciOdaOdaPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.NewDataOciOdaOdaPrivateEndpointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOdaOdaPrivateEndpointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.NewDataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.NewDataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems</a>

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.NewDataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get"></a>

```go
func Get(index *f64) DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociodaodaprivateendpoints"

dataociodaodaprivateendpoints.NewDataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection</a>

---



