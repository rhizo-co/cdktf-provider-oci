# `artifactsContainerRepository` Submodule <a name="`artifactsContainerRepository` Submodule" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactsContainerRepository <a name="ArtifactsContainerRepository" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository oci_artifacts_container_repository}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

artifactscontainerrepository.NewArtifactsContainerRepository(scope Construct, id *string, config ArtifactsContainerRepositoryConfig) ArtifactsContainerRepository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig">ArtifactsContainerRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig">ArtifactsContainerRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme">PutReadme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsImmutable">ResetIsImmutable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetReadme">ResetReadme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReadme` <a name="PutReadme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme"></a>

```go
func PutReadme(value ArtifactsContainerRepositoryReadme)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts"></a>

```go
func PutTimeouts(value ArtifactsContainerRepositoryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetId"></a>

```go
func ResetId()
```

##### `ResetIsImmutable` <a name="ResetIsImmutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsImmutable"></a>

```go
func ResetIsImmutable()
```

##### `ResetIsPublic` <a name="ResetIsPublic" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsPublic"></a>

```go
func ResetIsPublic()
```

##### `ResetReadme` <a name="ResetReadme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetReadme"></a>

```go
func ResetReadme()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArtifactsContainerRepository resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

artifactscontainerrepository.ArtifactsContainerRepository_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

artifactscontainerrepository.ArtifactsContainerRepository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

artifactscontainerrepository.ArtifactsContainerRepository_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

artifactscontainerrepository.ArtifactsContainerRepository_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ArtifactsContainerRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArtifactsContainerRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArtifactsContainerRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactsContainerRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.billableSizeInGbs">BillableSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.imageCount">ImageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layerCount">LayerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layersSizeInBytes">LayersSizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readme">Readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference">ArtifactsContainerRepositoryReadmeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeLastPushed">TimeLastPushed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference">ArtifactsContainerRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutableInput">IsImmutableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublicInput">IsPublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readmeInput">ReadmeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutable">IsImmutable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillableSizeInGbs`<sup>Required</sup> <a name="BillableSizeInGbs" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.billableSizeInGbs"></a>

```go
func BillableSizeInGbs() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `ImageCount`<sup>Required</sup> <a name="ImageCount" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.imageCount"></a>

```go
func ImageCount() *f64
```

- *Type:* *f64

---

##### `LayerCount`<sup>Required</sup> <a name="LayerCount" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layerCount"></a>

```go
func LayerCount() *f64
```

- *Type:* *f64

---

##### `LayersSizeInBytes`<sup>Required</sup> <a name="LayersSizeInBytes" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layersSizeInBytes"></a>

```go
func LayersSizeInBytes() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Readme`<sup>Required</sup> <a name="Readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readme"></a>

```go
func Readme() ArtifactsContainerRepositoryReadmeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference">ArtifactsContainerRepositoryReadmeOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastPushed`<sup>Required</sup> <a name="TimeLastPushed" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeLastPushed"></a>

```go
func TimeLastPushed() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeouts"></a>

```go
func Timeouts() ArtifactsContainerRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference">ArtifactsContainerRepositoryTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsImmutableInput`<sup>Optional</sup> <a name="IsImmutableInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutableInput"></a>

```go
func IsImmutableInput() interface{}
```

- *Type:* interface{}

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublicInput"></a>

```go
func IsPublicInput() interface{}
```

- *Type:* interface{}

---

##### `ReadmeInput`<sup>Optional</sup> <a name="ReadmeInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readmeInput"></a>

```go
func ReadmeInput() ArtifactsContainerRepositoryReadme
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsImmutable`<sup>Required</sup> <a name="IsImmutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutable"></a>

```go
func IsImmutable() interface{}
```

- *Type:* interface{}

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublic"></a>

```go
func IsPublic() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactsContainerRepositoryConfig <a name="ArtifactsContainerRepositoryConfig" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

&artifactscontainerrepository.ArtifactsContainerRepositoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsImmutable: interface{},
	IsPublic: interface{},
	Readme: github.com/rhizo-co/cdktf-provider-oci-go/oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#compartment_id ArtifactsContainerRepository#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#display_name ArtifactsContainerRepository#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#defined_tags ArtifactsContainerRepository#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#freeform_tags ArtifactsContainerRepository#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#id ArtifactsContainerRepository#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isImmutable">IsImmutable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_immutable ArtifactsContainerRepository#is_immutable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_public ArtifactsContainerRepository#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.readme">Readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | readme block. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#compartment_id ArtifactsContainerRepository#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#display_name ArtifactsContainerRepository#display_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#defined_tags ArtifactsContainerRepository#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#freeform_tags ArtifactsContainerRepository#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#id ArtifactsContainerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsImmutable`<sup>Optional</sup> <a name="IsImmutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isImmutable"></a>

```go
IsImmutable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_immutable ArtifactsContainerRepository#is_immutable}.

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isPublic"></a>

```go
IsPublic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_public ArtifactsContainerRepository#is_public}.

---

##### `Readme`<sup>Optional</sup> <a name="Readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.readme"></a>

```go
Readme ArtifactsContainerRepositoryReadme
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

readme block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#readme ArtifactsContainerRepository#readme}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.timeouts"></a>

```go
Timeouts ArtifactsContainerRepositoryTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#timeouts ArtifactsContainerRepository#timeouts}

---

### ArtifactsContainerRepositoryReadme <a name="ArtifactsContainerRepositoryReadme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

&artifactscontainerrepository.ArtifactsContainerRepositoryReadme {
	Content: *string,
	Format: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#content ArtifactsContainerRepository#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#format ArtifactsContainerRepository#format}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#content ArtifactsContainerRepository#content}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#format ArtifactsContainerRepository#format}.

---

### ArtifactsContainerRepositoryTimeouts <a name="ArtifactsContainerRepositoryTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

&artifactscontainerrepository.ArtifactsContainerRepositoryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#create ArtifactsContainerRepository#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#delete ArtifactsContainerRepository#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#update ArtifactsContainerRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#create ArtifactsContainerRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#delete ArtifactsContainerRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#update ArtifactsContainerRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactsContainerRepositoryReadmeOutputReference <a name="ArtifactsContainerRepositoryReadmeOutputReference" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

artifactscontainerrepository.NewArtifactsContainerRepositoryReadmeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactsContainerRepositoryReadmeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactsContainerRepositoryReadme
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

---


### ArtifactsContainerRepositoryTimeoutsOutputReference <a name="ArtifactsContainerRepositoryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/artifactscontainerrepository"

artifactscontainerrepository.NewArtifactsContainerRepositoryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactsContainerRepositoryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



