# `osManagementHubLifecycleEnvironment` Submodule <a name="`osManagementHubLifecycleEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubLifecycleEnvironment <a name="OsManagementHubLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment oci_os_management_hub_lifecycle_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironment(scope Construct, id *string, config OsManagementHubLifecycleEnvironmentConfig) OsManagementHubLifecycleEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig">OsManagementHubLifecycleEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig">OsManagementHubLifecycleEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStages` <a name="PutStages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages"></a>

```go
func PutStages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value OsManagementHubLifecycleEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubLifecycleEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsManagementHubLifecycleEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsManagementHubLifecycleEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsManagementHubLifecycleEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubLifecycleEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stages">Stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList">OsManagementHubLifecycleEnvironmentStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference">OsManagementHubLifecycleEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archTypeInput">ArchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamilyInput">OsFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stagesInput">StagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorNameInput">VendorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorName">VendorName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.managedInstanceIds"></a>

```go
func ManagedInstanceIds() OsManagementHubLifecycleEnvironmentManagedInstanceIdsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentManagedInstanceIdsList</a>

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stages"></a>

```go
func Stages() OsManagementHubLifecycleEnvironmentStagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList">OsManagementHubLifecycleEnvironmentStagesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeouts"></a>

```go
func Timeouts() OsManagementHubLifecycleEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference">OsManagementHubLifecycleEnvironmentTimeoutsOutputReference</a>

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archTypeInput"></a>

```go
func ArchTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamilyInput"></a>

```go
func OsFamilyInput() *string
```

- *Type:* *string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stagesInput"></a>

```go
func StagesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VendorNameInput`<sup>Optional</sup> <a name="VendorNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorNameInput"></a>

```go
func VendorNameInput() *string
```

- *Type:* *string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorName"></a>

```go
func VendorName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubLifecycleEnvironmentConfig <a name="OsManagementHubLifecycleEnvironmentConfig" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

&osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArchType: *string,
	CompartmentId: *string,
	DisplayName: *string,
	OsFamily: *string,
	Stages: interface{},
	VendorName: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Location: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.archType">ArchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#arch_type OsManagementHubLifecycleEnvironment#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.osFamily">OsFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#os_family OsManagementHubLifecycleEnvironment#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.stages">Stages</a></code> | <code>interface{}</code> | stages block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.vendorName">VendorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#vendor_name OsManagementHubLifecycleEnvironment#vendor_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#description OsManagementHubLifecycleEnvironment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#id OsManagementHubLifecycleEnvironment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#location OsManagementHubLifecycleEnvironment#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.archType"></a>

```go
ArchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#arch_type OsManagementHubLifecycleEnvironment#arch_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}.

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.osFamily"></a>

```go
OsFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#os_family OsManagementHubLifecycleEnvironment#os_family}.

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.stages"></a>

```go
Stages interface{}
```

- *Type:* interface{}

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#stages OsManagementHubLifecycleEnvironment#stages}

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.vendorName"></a>

```go
VendorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#vendor_name OsManagementHubLifecycleEnvironment#vendor_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#description OsManagementHubLifecycleEnvironment#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#id OsManagementHubLifecycleEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#location OsManagementHubLifecycleEnvironment#location}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.timeouts"></a>

```go
Timeouts OsManagementHubLifecycleEnvironmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#timeouts OsManagementHubLifecycleEnvironment#timeouts}

---

### OsManagementHubLifecycleEnvironmentManagedInstanceIds <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

&osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds {

}
```


### OsManagementHubLifecycleEnvironmentStages <a name="OsManagementHubLifecycleEnvironmentStages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

&osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironmentStages {
	DisplayName: *string,
	Rank: *f64,
	CompartmentId: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.rank">Rank</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#rank OsManagementHubLifecycleEnvironment#rank}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}.

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.rank"></a>

```go
Rank *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#rank OsManagementHubLifecycleEnvironment#rank}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}.

---

### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

&osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds {

}
```


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

&osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId {

}
```


### OsManagementHubLifecycleEnvironmentTimeouts <a name="OsManagementHubLifecycleEnvironmentTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

&osmanagementhublifecycleenvironment.OsManagementHubLifecycleEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#create OsManagementHubLifecycleEnvironment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#delete OsManagementHubLifecycleEnvironment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#update OsManagementHubLifecycleEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#create OsManagementHubLifecycleEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#delete OsManagementHubLifecycleEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#update OsManagementHubLifecycleEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubLifecycleEnvironmentManagedInstanceIdsList <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentManagedInstanceIdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubLifecycleEnvironmentManagedInstanceIdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get"></a>

```go
func Get(index *f64) OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds">OsManagementHubLifecycleEnvironmentManagedInstanceIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubLifecycleEnvironmentManagedInstanceIds
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds">OsManagementHubLifecycleEnvironmentManagedInstanceIds</a>

---


### OsManagementHubLifecycleEnvironmentStagesList <a name="OsManagementHubLifecycleEnvironmentStagesList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubLifecycleEnvironmentStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get"></a>

```go
func Get(index *f64) OsManagementHubLifecycleEnvironmentStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get"></a>

```go
func Get(index *f64) OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds</a>

---


### OsManagementHubLifecycleEnvironmentStagesOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubLifecycleEnvironmentStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.lifecycleEnvironmentId">LifecycleEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.vendorName">VendorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rankInput">RankInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rank">Rank</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleEnvironmentId`<sup>Required</sup> <a name="LifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.lifecycleEnvironmentId"></a>

```go
func LifecycleEnvironmentId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.managedInstanceIds"></a>

```go
func ManagedInstanceIds() OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList</a>

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.vendorName"></a>

```go
func VendorName() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RankInput`<sup>Optional</sup> <a name="RankInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rankInput"></a>

```go
func RankInput() *f64
```

- *Type:* *f64

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rank"></a>

```go
func Rank() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get"></a>

```go
func Get(index *f64) OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```go
func IsMandatoryForAutonomousLinux() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```go
func SoftwareSourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId</a>

---


### OsManagementHubLifecycleEnvironmentTimeoutsOutputReference <a name="OsManagementHubLifecycleEnvironmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhublifecycleenvironment"

osmanagementhublifecycleenvironment.NewOsManagementHubLifecycleEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubLifecycleEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



