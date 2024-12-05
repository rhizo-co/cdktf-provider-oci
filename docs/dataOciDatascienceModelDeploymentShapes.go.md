# `dataOciDatascienceModelDeploymentShapes` Submodule <a name="`dataOciDatascienceModelDeploymentShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceModelDeploymentShapes <a name="DataOciDatascienceModelDeploymentShapes" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes oci_datascience_model_deployment_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.NewDataOciDatascienceModelDeploymentShapes(scope Construct, id *string, config DataOciDatascienceModelDeploymentShapesConfig) DataOciDatascienceModelDeploymentShapes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig">DataOciDatascienceModelDeploymentShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig">DataOciDatascienceModelDeploymentShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatascienceModelDeploymentShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.DataOciDatascienceModelDeploymentShapes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.DataOciDatascienceModelDeploymentShapes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.DataOciDatascienceModelDeploymentShapes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.DataOciDatascienceModelDeploymentShapes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatascienceModelDeploymentShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatascienceModelDeploymentShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatascienceModelDeploymentShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceModelDeploymentShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList">DataOciDatascienceModelDeploymentShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.modelDeploymentShapes">ModelDeploymentShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList">DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.filter"></a>

```go
func Filter() DataOciDatascienceModelDeploymentShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList">DataOciDatascienceModelDeploymentShapesFilterList</a>

---

##### `ModelDeploymentShapes`<sup>Required</sup> <a name="ModelDeploymentShapes" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.modelDeploymentShapes"></a>

```go
func ModelDeploymentShapes() DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList">DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceModelDeploymentShapesConfig <a name="DataOciDatascienceModelDeploymentShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

&dataocidatasciencemodeldeploymentshapes.DataOciDatascienceModelDeploymentShapesConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#compartment_id DataOciDatascienceModelDeploymentShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#id DataOciDatascienceModelDeploymentShapes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#compartment_id DataOciDatascienceModelDeploymentShapes#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#filter DataOciDatascienceModelDeploymentShapes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#id DataOciDatascienceModelDeploymentShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatascienceModelDeploymentShapesFilter <a name="DataOciDatascienceModelDeploymentShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

&dataocidatasciencemodeldeploymentshapes.DataOciDatascienceModelDeploymentShapesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#name DataOciDatascienceModelDeploymentShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#values DataOciDatascienceModelDeploymentShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#regex DataOciDatascienceModelDeploymentShapes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#name DataOciDatascienceModelDeploymentShapes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#values DataOciDatascienceModelDeploymentShapes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployment_shapes#regex DataOciDatascienceModelDeploymentShapes#regex}.

---

### DataOciDatascienceModelDeploymentShapesModelDeploymentShapes <a name="DataOciDatascienceModelDeploymentShapesModelDeploymentShapes" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

&dataocidatasciencemodeldeploymentshapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceModelDeploymentShapesFilterList <a name="DataOciDatascienceModelDeploymentShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.NewDataOciDatascienceModelDeploymentShapesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceModelDeploymentShapesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatascienceModelDeploymentShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatascienceModelDeploymentShapesFilterOutputReference <a name="DataOciDatascienceModelDeploymentShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.NewDataOciDatascienceModelDeploymentShapesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceModelDeploymentShapesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList <a name="DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.NewDataOciDatascienceModelDeploymentShapesModelDeploymentShapesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.get"></a>

```go
func Get(index *f64) DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference <a name="DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencemodeldeploymentshapes"

dataocidatasciencemodeldeploymentshapes.NewDataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.shapeSeries">ShapeSeries</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapes">DataOciDatascienceModelDeploymentShapesModelDeploymentShapes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ShapeSeries`<sup>Required</sup> <a name="ShapeSeries" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.shapeSeries"></a>

```go
func ShapeSeries() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceModelDeploymentShapesModelDeploymentShapes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeploymentShapes.DataOciDatascienceModelDeploymentShapesModelDeploymentShapes">DataOciDatascienceModelDeploymentShapesModelDeploymentShapes</a>

---



