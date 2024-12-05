# `genericArtifactsContentArtifactByPath` Submodule <a name="`genericArtifactsContentArtifactByPath` Submodule" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenericArtifactsContentArtifactByPath <a name="GenericArtifactsContentArtifactByPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path oci_generic_artifacts_content_artifact_by_path}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/genericartifactscontentartifactbypath"

genericartifactscontentartifactbypath.NewGenericArtifactsContentArtifactByPath(scope Construct, id *string, config GenericArtifactsContentArtifactByPathConfig) GenericArtifactsContentArtifactByPath
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig">GenericArtifactsContentArtifactByPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig">GenericArtifactsContentArtifactByPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts"></a>

```go
func PutTimeouts(value GenericArtifactsContentArtifactByPathTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a>

---

##### `ResetContent` <a name="ResetContent" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetContent"></a>

```go
func ResetContent()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetId"></a>

```go
func ResetId()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/genericartifactscontentartifactbypath"

genericartifactscontentartifactbypath.GenericArtifactsContentArtifactByPath_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/genericartifactscontentartifactbypath"

genericartifactscontentartifactbypath.GenericArtifactsContentArtifactByPath_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/genericartifactscontentartifactbypath"

genericartifactscontentartifactbypath.GenericArtifactsContentArtifactByPath_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/genericartifactscontentartifactbypath"

genericartifactscontentartifactbypath.GenericArtifactsContentArtifactByPath_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GenericArtifactsContentArtifactByPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GenericArtifactsContentArtifactByPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GenericArtifactsContentArtifactByPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference">GenericArtifactsContentArtifactByPathTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPathInput">ArtifactPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sizeInBytes"></a>

```go
func SizeInBytes() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeouts"></a>

```go
func Timeouts() GenericArtifactsContentArtifactByPathTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference">GenericArtifactsContentArtifactByPathTimeoutsOutputReference</a>

---

##### `ArtifactPathInput`<sup>Optional</sup> <a name="ArtifactPathInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPathInput"></a>

```go
func ArtifactPathInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPath"></a>

```go
func ArtifactPath() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GenericArtifactsContentArtifactByPathConfig <a name="GenericArtifactsContentArtifactByPathConfig" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/genericartifactscontentartifactbypath"

&genericartifactscontentartifactbypath.GenericArtifactsContentArtifactByPathConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactPath: *string,
	RepositoryId: *string,
	Version: *string,
	Content: *string,
	Id: *string,
	Source: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.artifactPath">ArtifactPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#artifact_path GenericArtifactsContentArtifactByPath#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#repository_id GenericArtifactsContentArtifactByPath#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#version GenericArtifactsContentArtifactByPath#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#content GenericArtifactsContentArtifactByPath#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#id GenericArtifactsContentArtifactByPath#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#source GenericArtifactsContentArtifactByPath#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.artifactPath"></a>

```go
ArtifactPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#artifact_path GenericArtifactsContentArtifactByPath#artifact_path}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#repository_id GenericArtifactsContentArtifactByPath#repository_id}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#version GenericArtifactsContentArtifactByPath#version}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#content GenericArtifactsContentArtifactByPath#content}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#id GenericArtifactsContentArtifactByPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#source GenericArtifactsContentArtifactByPath#source}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.timeouts"></a>

```go
Timeouts GenericArtifactsContentArtifactByPathTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#timeouts GenericArtifactsContentArtifactByPath#timeouts}

---

### GenericArtifactsContentArtifactByPathTimeouts <a name="GenericArtifactsContentArtifactByPathTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/genericartifactscontentartifactbypath"

&genericartifactscontentartifactbypath.GenericArtifactsContentArtifactByPathTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#create GenericArtifactsContentArtifactByPath#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#delete GenericArtifactsContentArtifactByPath#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#update GenericArtifactsContentArtifactByPath#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#create GenericArtifactsContentArtifactByPath#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#delete GenericArtifactsContentArtifactByPath#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#update GenericArtifactsContentArtifactByPath#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenericArtifactsContentArtifactByPathTimeoutsOutputReference <a name="GenericArtifactsContentArtifactByPathTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/genericartifactscontentartifactbypath"

genericartifactscontentartifactbypath.NewGenericArtifactsContentArtifactByPathTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GenericArtifactsContentArtifactByPathTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



