# `datascienceModelArtifactExport` Submodule <a name="`datascienceModelArtifactExport` Submodule" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceModelArtifactExport <a name="DatascienceModelArtifactExport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export oci_datascience_model_artifact_export}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodelartifactexport"

datasciencemodelartifactexport.NewDatascienceModelArtifactExport(scope Construct, id *string, config DatascienceModelArtifactExportConfig) DatascienceModelArtifactExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig">DatascienceModelArtifactExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig">DatascienceModelArtifactExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts"></a>

```go
func PutTimeouts(value DatascienceModelArtifactExportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceModelArtifactExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodelartifactexport"

datasciencemodelartifactexport.DatascienceModelArtifactExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodelartifactexport"

datasciencemodelartifactexport.DatascienceModelArtifactExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodelartifactexport"

datasciencemodelartifactexport.DatascienceModelArtifactExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodelartifactexport"

datasciencemodelartifactexport.DatascienceModelArtifactExport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatascienceModelArtifactExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatascienceModelArtifactExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatascienceModelArtifactExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceModelArtifactExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference">DatascienceModelArtifactExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceTypeInput">ArtifactSourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucketInput">SourceBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectNameInput">SourceObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegionInput">SourceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceType">ArtifactSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucket">SourceBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectName">SourceObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeouts"></a>

```go
func Timeouts() DatascienceModelArtifactExportTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference">DatascienceModelArtifactExportTimeoutsOutputReference</a>

---

##### `ArtifactSourceTypeInput`<sup>Optional</sup> <a name="ArtifactSourceTypeInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceTypeInput"></a>

```go
func ArtifactSourceTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SourceBucketInput`<sup>Optional</sup> <a name="SourceBucketInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucketInput"></a>

```go
func SourceBucketInput() *string
```

- *Type:* *string

---

##### `SourceObjectNameInput`<sup>Optional</sup> <a name="SourceObjectNameInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectNameInput"></a>

```go
func SourceObjectNameInput() *string
```

- *Type:* *string

---

##### `SourceRegionInput`<sup>Optional</sup> <a name="SourceRegionInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegionInput"></a>

```go
func SourceRegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ArtifactSourceType`<sup>Required</sup> <a name="ArtifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceType"></a>

```go
func ArtifactSourceType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SourceBucket`<sup>Required</sup> <a name="SourceBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucket"></a>

```go
func SourceBucket() *string
```

- *Type:* *string

---

##### `SourceObjectName`<sup>Required</sup> <a name="SourceObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectName"></a>

```go
func SourceObjectName() *string
```

- *Type:* *string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegion"></a>

```go
func SourceRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceModelArtifactExportConfig <a name="DatascienceModelArtifactExportConfig" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodelartifactexport"

&datasciencemodelartifactexport.DatascienceModelArtifactExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactSourceType: *string,
	ModelId: *string,
	Namespace: *string,
	SourceBucket: *string,
	SourceObjectName: *string,
	SourceRegion: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.artifactSourceType">ArtifactSourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceBucket">SourceBucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceObjectName">SourceObjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactSourceType`<sup>Required</sup> <a name="ArtifactSourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.artifactSourceType"></a>

```go
ArtifactSourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}.

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}.

---

##### `SourceBucket`<sup>Required</sup> <a name="SourceBucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceBucket"></a>

```go
SourceBucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}.

---

##### `SourceObjectName`<sup>Required</sup> <a name="SourceObjectName" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceObjectName"></a>

```go
SourceObjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}.

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceRegion"></a>

```go
SourceRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.timeouts"></a>

```go
Timeouts DatascienceModelArtifactExportTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#timeouts DatascienceModelArtifactExport#timeouts}

---

### DatascienceModelArtifactExportTimeouts <a name="DatascienceModelArtifactExportTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodelartifactexport"

&datasciencemodelartifactexport.DatascienceModelArtifactExportTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#create DatascienceModelArtifactExport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#delete DatascienceModelArtifactExport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#update DatascienceModelArtifactExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#create DatascienceModelArtifactExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#delete DatascienceModelArtifactExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#update DatascienceModelArtifactExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceModelArtifactExportTimeoutsOutputReference <a name="DatascienceModelArtifactExportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodelartifactexport"

datasciencemodelartifactexport.NewDatascienceModelArtifactExportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceModelArtifactExportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



