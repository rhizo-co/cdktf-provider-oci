# `datascienceNotebookSession` Submodule <a name="`datascienceNotebookSession` Submodule" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceNotebookSession <a name="DatascienceNotebookSession" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session oci_datascience_notebook_session}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSession(scope Construct, id *string, config DatascienceNotebookSessionConfig) DatascienceNotebookSession
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig">DatascienceNotebookSessionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig">DatascienceNotebookSessionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails">PutNotebookSessionConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails">PutNotebookSessionConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionRuntimeConfigDetails">PutNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionStorageMountConfigurationDetailsList">PutNotebookSessionStorageMountConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionConfigDetails">ResetNotebookSessionConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionConfigurationDetails">ResetNotebookSessionConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionRuntimeConfigDetails">ResetNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionStorageMountConfigurationDetailsList">ResetNotebookSessionStorageMountConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotebookSessionConfigDetails` <a name="PutNotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails"></a>

```go
func PutNotebookSessionConfigDetails(value DatascienceNotebookSessionNotebookSessionConfigDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a>

---

##### `PutNotebookSessionConfigurationDetails` <a name="PutNotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails"></a>

```go
func PutNotebookSessionConfigurationDetails(value DatascienceNotebookSessionNotebookSessionConfigurationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

---

##### `PutNotebookSessionRuntimeConfigDetails` <a name="PutNotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionRuntimeConfigDetails"></a>

```go
func PutNotebookSessionRuntimeConfigDetails(value DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionRuntimeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

---

##### `PutNotebookSessionStorageMountConfigurationDetailsList` <a name="PutNotebookSessionStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionStorageMountConfigurationDetailsList"></a>

```go
func PutNotebookSessionStorageMountConfigurationDetailsList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionStorageMountConfigurationDetailsList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putTimeouts"></a>

```go
func PutTimeouts(value DatascienceNotebookSessionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetId"></a>

```go
func ResetId()
```

##### `ResetNotebookSessionConfigDetails` <a name="ResetNotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionConfigDetails"></a>

```go
func ResetNotebookSessionConfigDetails()
```

##### `ResetNotebookSessionConfigurationDetails` <a name="ResetNotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionConfigurationDetails"></a>

```go
func ResetNotebookSessionConfigurationDetails()
```

##### `ResetNotebookSessionRuntimeConfigDetails` <a name="ResetNotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionRuntimeConfigDetails"></a>

```go
func ResetNotebookSessionRuntimeConfigDetails()
```

##### `ResetNotebookSessionStorageMountConfigurationDetailsList` <a name="ResetNotebookSessionStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionStorageMountConfigurationDetailsList"></a>

```go
func ResetNotebookSessionStorageMountConfigurationDetailsList()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceNotebookSession resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.DatascienceNotebookSession_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.DatascienceNotebookSession_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.DatascienceNotebookSession_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.DatascienceNotebookSession_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatascienceNotebookSession resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatascienceNotebookSession to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatascienceNotebookSession that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceNotebookSession to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigDetails">NotebookSessionConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigurationDetails">NotebookSessionConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionRuntimeConfigDetails">NotebookSessionRuntimeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsList">NotebookSessionStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionUrl">NotebookSessionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference">DatascienceNotebookSessionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigDetailsInput">NotebookSessionConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigurationDetailsInput">NotebookSessionConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionRuntimeConfigDetailsInput">NotebookSessionRuntimeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsListInput">NotebookSessionStorageMountConfigurationDetailsListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NotebookSessionConfigDetails`<sup>Required</sup> <a name="NotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigDetails"></a>

```go
func NotebookSessionConfigDetails() DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference</a>

---

##### `NotebookSessionConfigurationDetails`<sup>Required</sup> <a name="NotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigurationDetails"></a>

```go
func NotebookSessionConfigurationDetails() DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference</a>

---

##### `NotebookSessionRuntimeConfigDetails`<sup>Required</sup> <a name="NotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionRuntimeConfigDetails"></a>

```go
func NotebookSessionRuntimeConfigDetails() DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference</a>

---

##### `NotebookSessionStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="NotebookSessionStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsList"></a>

```go
func NotebookSessionStorageMountConfigurationDetailsList() DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList</a>

---

##### `NotebookSessionUrl`<sup>Required</sup> <a name="NotebookSessionUrl" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionUrl"></a>

```go
func NotebookSessionUrl() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeouts"></a>

```go
func Timeouts() DatascienceNotebookSessionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference">DatascienceNotebookSessionTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotebookSessionConfigDetailsInput`<sup>Optional</sup> <a name="NotebookSessionConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigDetailsInput"></a>

```go
func NotebookSessionConfigDetailsInput() DatascienceNotebookSessionNotebookSessionConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a>

---

##### `NotebookSessionConfigurationDetailsInput`<sup>Optional</sup> <a name="NotebookSessionConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigurationDetailsInput"></a>

```go
func NotebookSessionConfigurationDetailsInput() DatascienceNotebookSessionNotebookSessionConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

---

##### `NotebookSessionRuntimeConfigDetailsInput`<sup>Optional</sup> <a name="NotebookSessionRuntimeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionRuntimeConfigDetailsInput"></a>

```go
func NotebookSessionRuntimeConfigDetailsInput() DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

---

##### `NotebookSessionStorageMountConfigurationDetailsListInput`<sup>Optional</sup> <a name="NotebookSessionStorageMountConfigurationDetailsListInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsListInput"></a>

```go
func NotebookSessionStorageMountConfigurationDetailsListInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceNotebookSessionConfig <a name="DatascienceNotebookSessionConfig" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ProjectId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	NotebookSessionConfigDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails,
	NotebookSessionConfigurationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails,
	NotebookSessionRuntimeConfigDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails,
	NotebookSessionStorageMountConfigurationDetailsList: interface{},
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#compartment_id DatascienceNotebookSession#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#project_id DatascienceNotebookSession#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#defined_tags DatascienceNotebookSession#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#display_name DatascienceNotebookSession#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#freeform_tags DatascienceNotebookSession#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#id DatascienceNotebookSession#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionConfigDetails">NotebookSessionConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a></code> | notebook_session_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionConfigurationDetails">NotebookSessionConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a></code> | notebook_session_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionRuntimeConfigDetails">NotebookSessionRuntimeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a></code> | notebook_session_runtime_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionStorageMountConfigurationDetailsList">NotebookSessionStorageMountConfigurationDetailsList</a></code> | <code>interface{}</code> | notebook_session_storage_mount_configuration_details_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#state DatascienceNotebookSession#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#compartment_id DatascienceNotebookSession#compartment_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#project_id DatascienceNotebookSession#project_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#defined_tags DatascienceNotebookSession#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#display_name DatascienceNotebookSession#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#freeform_tags DatascienceNotebookSession#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#id DatascienceNotebookSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotebookSessionConfigDetails`<sup>Optional</sup> <a name="NotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionConfigDetails"></a>

```go
NotebookSessionConfigDetails DatascienceNotebookSessionNotebookSessionConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a>

notebook_session_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_config_details DatascienceNotebookSession#notebook_session_config_details}

---

##### `NotebookSessionConfigurationDetails`<sup>Optional</sup> <a name="NotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionConfigurationDetails"></a>

```go
NotebookSessionConfigurationDetails DatascienceNotebookSessionNotebookSessionConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

notebook_session_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_configuration_details DatascienceNotebookSession#notebook_session_configuration_details}

---

##### `NotebookSessionRuntimeConfigDetails`<sup>Optional</sup> <a name="NotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionRuntimeConfigDetails"></a>

```go
NotebookSessionRuntimeConfigDetails DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

notebook_session_runtime_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_runtime_config_details DatascienceNotebookSession#notebook_session_runtime_config_details}

---

##### `NotebookSessionStorageMountConfigurationDetailsList`<sup>Optional</sup> <a name="NotebookSessionStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionStorageMountConfigurationDetailsList"></a>

```go
NotebookSessionStorageMountConfigurationDetailsList interface{}
```

- *Type:* interface{}

notebook_session_storage_mount_configuration_details_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_storage_mount_configuration_details_list DatascienceNotebookSession#notebook_session_storage_mount_configuration_details_list}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#state DatascienceNotebookSession#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.timeouts"></a>

```go
Timeouts DatascienceNotebookSessionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#timeouts DatascienceNotebookSession#timeouts}

---

### DatascienceNotebookSessionNotebookSessionConfigDetails <a name="DatascienceNotebookSessionNotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionNotebookSessionConfigDetails {
	Shape: *string,
	BlockStorageSizeInGbs: *f64,
	NotebookSessionShapeConfigDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails,
	PrivateEndpointId: *string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.notebookSessionShapeConfigDetails">NotebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | notebook_session_shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}. |

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}.

---

##### `BlockStorageSizeInGbs`<sup>Optional</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.blockStorageSizeInGbs"></a>

```go
BlockStorageSizeInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}.

---

##### `NotebookSessionShapeConfigDetails`<sup>Optional</sup> <a name="NotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.notebookSessionShapeConfigDetails"></a>

```go
NotebookSessionShapeConfigDetails DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

notebook_session_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_shape_config_details DatascienceNotebookSession#notebook_session_shape_config_details}

---

##### `PrivateEndpointId`<sup>Optional</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.privateEndpointId"></a>

```go
PrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}.

---

### DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails <a name="DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails {
	MemoryInGbs: *f64,
	Ocpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}.

---

### DatascienceNotebookSessionNotebookSessionConfigurationDetails <a name="DatascienceNotebookSessionNotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionNotebookSessionConfigurationDetails {
	Shape: *string,
	SubnetId: *string,
	BlockStorageSizeInGbs: *f64,
	NotebookSessionShapeConfigDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails,
	PrivateEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.notebookSessionShapeConfigDetails">NotebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | notebook_session_shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}. |

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}.

---

##### `BlockStorageSizeInGbs`<sup>Optional</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.blockStorageSizeInGbs"></a>

```go
BlockStorageSizeInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}.

---

##### `NotebookSessionShapeConfigDetails`<sup>Optional</sup> <a name="NotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.notebookSessionShapeConfigDetails"></a>

```go
NotebookSessionShapeConfigDetails DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

notebook_session_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_shape_config_details DatascienceNotebookSession#notebook_session_shape_config_details}

---

##### `PrivateEndpointId`<sup>Optional</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.privateEndpointId"></a>

```go
PrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}.

---

### DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails <a name="DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails {
	MemoryInGbs: *f64,
	Ocpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}.

---

### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails {
	CustomEnvironmentVariables: *map[string]*string,
	NotebookSessionGitConfigDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.property.customEnvironmentVariables">CustomEnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#custom_environment_variables DatascienceNotebookSession#custom_environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.property.notebookSessionGitConfigDetails">NotebookSessionGitConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | notebook_session_git_config_details block. |

---

##### `CustomEnvironmentVariables`<sup>Optional</sup> <a name="CustomEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.property.customEnvironmentVariables"></a>

```go
CustomEnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#custom_environment_variables DatascienceNotebookSession#custom_environment_variables}.

---

##### `NotebookSessionGitConfigDetails`<sup>Optional</sup> <a name="NotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.property.notebookSessionGitConfigDetails"></a>

```go
NotebookSessionGitConfigDetails DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

notebook_session_git_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_git_config_details DatascienceNotebookSession#notebook_session_git_config_details}

---

### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails {
	NotebookSessionGitRepoConfigCollection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.property.notebookSessionGitRepoConfigCollection">NotebookSessionGitRepoConfigCollection</a></code> | <code>interface{}</code> | notebook_session_git_repo_config_collection block. |

---

##### `NotebookSessionGitRepoConfigCollection`<sup>Optional</sup> <a name="NotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.property.notebookSessionGitRepoConfigCollection"></a>

```go
NotebookSessionGitRepoConfigCollection interface{}
```

- *Type:* interface{}

notebook_session_git_repo_config_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_git_repo_config_collection DatascienceNotebookSession#notebook_session_git_repo_config_collection}

---

### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection {
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#url DatascienceNotebookSession#url}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#url DatascienceNotebookSession#url}.

---

### DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct <a name="DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct {
	DestinationDirectoryName: *string,
	StorageType: *string,
	Bucket: *string,
	DestinationPath: *string,
	ExportId: *string,
	MountTargetId: *string,
	Namespace: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName">DestinationDirectoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#destination_directory_name DatascienceNotebookSession#destination_directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#storage_type DatascienceNotebookSession#storage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#bucket DatascienceNotebookSession#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#destination_path DatascienceNotebookSession#destination_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.exportId">ExportId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#export_id DatascienceNotebookSession#export_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#mount_target_id DatascienceNotebookSession#mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#namespace DatascienceNotebookSession#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#prefix DatascienceNotebookSession#prefix}. |

---

##### `DestinationDirectoryName`<sup>Required</sup> <a name="DestinationDirectoryName" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName"></a>

```go
DestinationDirectoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#destination_directory_name DatascienceNotebookSession#destination_directory_name}.

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#storage_type DatascienceNotebookSession#storage_type}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#bucket DatascienceNotebookSession#bucket}.

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.destinationPath"></a>

```go
DestinationPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#destination_path DatascienceNotebookSession#destination_path}.

---

##### `ExportId`<sup>Optional</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.exportId"></a>

```go
ExportId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#export_id DatascienceNotebookSession#export_id}.

---

##### `MountTargetId`<sup>Optional</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.mountTargetId"></a>

```go
MountTargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#mount_target_id DatascienceNotebookSession#mount_target_id}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#namespace DatascienceNotebookSession#namespace}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#prefix DatascienceNotebookSession#prefix}.

---

### DatascienceNotebookSessionTimeouts <a name="DatascienceNotebookSessionTimeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

&datasciencenotebooksession.DatascienceNotebookSessionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#create DatascienceNotebookSession#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#delete DatascienceNotebookSession#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#update DatascienceNotebookSession#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#create DatascienceNotebookSession#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#delete DatascienceNotebookSession#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#update DatascienceNotebookSession#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resetOcpus"></a>

```go
func ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.putNotebookSessionShapeConfigDetails">PutNotebookSessionShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetBlockStorageSizeInGbs">ResetBlockStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetNotebookSessionShapeConfigDetails">ResetNotebookSessionShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetPrivateEndpointId">ResetPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotebookSessionShapeConfigDetails` <a name="PutNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.putNotebookSessionShapeConfigDetails"></a>

```go
func PutNotebookSessionShapeConfigDetails(value DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.putNotebookSessionShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---

##### `ResetBlockStorageSizeInGbs` <a name="ResetBlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetBlockStorageSizeInGbs"></a>

```go
func ResetBlockStorageSizeInGbs()
```

##### `ResetNotebookSessionShapeConfigDetails` <a name="ResetNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetNotebookSessionShapeConfigDetails"></a>

```go
func ResetNotebookSessionShapeConfigDetails()
```

##### `ResetPrivateEndpointId` <a name="ResetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetPrivateEndpointId"></a>

```go
func ResetPrivateEndpointId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails">NotebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbsInput">BlockStorageSizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetailsInput">NotebookSessionShapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookSessionShapeConfigDetails`<sup>Required</sup> <a name="NotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```go
func NotebookSessionShapeConfigDetails() DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference</a>

---

##### `BlockStorageSizeInGbsInput`<sup>Optional</sup> <a name="BlockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```go
func BlockStorageSizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `NotebookSessionShapeConfigDetailsInput`<sup>Optional</sup> <a name="NotebookSessionShapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetailsInput"></a>

```go
func NotebookSessionShapeConfigDetailsInput() DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointIdInput"></a>

```go
func PrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```go
func BlockStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceNotebookSessionNotebookSessionConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resetOcpus"></a>

```go
func ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.putNotebookSessionShapeConfigDetails">PutNotebookSessionShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetBlockStorageSizeInGbs">ResetBlockStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetNotebookSessionShapeConfigDetails">ResetNotebookSessionShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetPrivateEndpointId">ResetPrivateEndpointId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotebookSessionShapeConfigDetails` <a name="PutNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.putNotebookSessionShapeConfigDetails"></a>

```go
func PutNotebookSessionShapeConfigDetails(value DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.putNotebookSessionShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---

##### `ResetBlockStorageSizeInGbs` <a name="ResetBlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetBlockStorageSizeInGbs"></a>

```go
func ResetBlockStorageSizeInGbs()
```

##### `ResetNotebookSessionShapeConfigDetails` <a name="ResetNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetNotebookSessionShapeConfigDetails"></a>

```go
func ResetNotebookSessionShapeConfigDetails()
```

##### `ResetPrivateEndpointId` <a name="ResetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetPrivateEndpointId"></a>

```go
func ResetPrivateEndpointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails">NotebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">BlockStorageSizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetailsInput">NotebookSessionShapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookSessionShapeConfigDetails`<sup>Required</sup> <a name="NotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```go
func NotebookSessionShapeConfigDetails() DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference</a>

---

##### `BlockStorageSizeInGbsInput`<sup>Optional</sup> <a name="BlockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```go
func BlockStorageSizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `NotebookSessionShapeConfigDetailsInput`<sup>Optional</sup> <a name="NotebookSessionShapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetailsInput"></a>

```go
func NotebookSessionShapeConfigDetailsInput() DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointIdInput"></a>

```go
func PrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```go
func BlockStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceNotebookSessionNotebookSessionConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

---


### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get"></a>

```go
func Get(index *f64) DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.putNotebookSessionGitRepoConfigCollection">PutNotebookSessionGitRepoConfigCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resetNotebookSessionGitRepoConfigCollection">ResetNotebookSessionGitRepoConfigCollection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotebookSessionGitRepoConfigCollection` <a name="PutNotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.putNotebookSessionGitRepoConfigCollection"></a>

```go
func PutNotebookSessionGitRepoConfigCollection(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.putNotebookSessionGitRepoConfigCollection.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotebookSessionGitRepoConfigCollection` <a name="ResetNotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resetNotebookSessionGitRepoConfigCollection"></a>

```go
func ResetNotebookSessionGitRepoConfigCollection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection">NotebookSessionGitRepoConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollectionInput">NotebookSessionGitRepoConfigCollectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookSessionGitRepoConfigCollection`<sup>Required</sup> <a name="NotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection"></a>

```go
func NotebookSessionGitRepoConfigCollection() DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a>

---

##### `NotebookSessionGitRepoConfigCollectionInput`<sup>Optional</sup> <a name="NotebookSessionGitRepoConfigCollectionInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollectionInput"></a>

```go
func NotebookSessionGitRepoConfigCollectionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.putNotebookSessionGitConfigDetails">PutNotebookSessionGitConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resetCustomEnvironmentVariables">ResetCustomEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resetNotebookSessionGitConfigDetails">ResetNotebookSessionGitConfigDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotebookSessionGitConfigDetails` <a name="PutNotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.putNotebookSessionGitConfigDetails"></a>

```go
func PutNotebookSessionGitConfigDetails(value DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.putNotebookSessionGitConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---

##### `ResetCustomEnvironmentVariables` <a name="ResetCustomEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resetCustomEnvironmentVariables"></a>

```go
func ResetCustomEnvironmentVariables()
```

##### `ResetNotebookSessionGitConfigDetails` <a name="ResetNotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resetNotebookSessionGitConfigDetails"></a>

```go
func ResetNotebookSessionGitConfigDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails">NotebookSessionGitConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariablesInput">CustomEnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetailsInput">NotebookSessionGitConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables">CustomEnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookSessionGitConfigDetails`<sup>Required</sup> <a name="NotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails"></a>

```go
func NotebookSessionGitConfigDetails() DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference</a>

---

##### `CustomEnvironmentVariablesInput`<sup>Optional</sup> <a name="CustomEnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariablesInput"></a>

```go
func CustomEnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotebookSessionGitConfigDetailsInput`<sup>Optional</sup> <a name="NotebookSessionGitConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetailsInput"></a>

```go
func NotebookSessionGitConfigDetailsInput() DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---

##### `CustomEnvironmentVariables`<sup>Required</sup> <a name="CustomEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables"></a>

```go
func CustomEnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList <a name="DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get"></a>

```go
func Get(index *f64) DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference <a name="DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetExportId">ResetExportId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId">ResetMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath"></a>

```go
func ResetDestinationPath()
```

##### `ResetExportId` <a name="ResetExportId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetExportId"></a>

```go
func ResetExportId()
```

##### `ResetMountTargetId` <a name="ResetMountTargetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId"></a>

```go
func ResetMountTargetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPrefix` <a name="ResetPrefix" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput">DestinationDirectoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput">ExportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput">MountTargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">DestinationDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId">ExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DestinationDirectoryNameInput`<sup>Optional</sup> <a name="DestinationDirectoryNameInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput"></a>

```go
func DestinationDirectoryNameInput() *string
```

- *Type:* *string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput"></a>

```go
func DestinationPathInput() *string
```

- *Type:* *string

---

##### `ExportIdInput`<sup>Optional</sup> <a name="ExportIdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput"></a>

```go
func ExportIdInput() *string
```

- *Type:* *string

---

##### `MountTargetIdInput`<sup>Optional</sup> <a name="MountTargetIdInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput"></a>

```go
func MountTargetIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DestinationDirectoryName`<sup>Required</sup> <a name="DestinationDirectoryName" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```go
func DestinationDirectoryName() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```go
func ExportId() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatascienceNotebookSessionTimeoutsOutputReference <a name="DatascienceNotebookSessionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencenotebooksession"

datasciencenotebooksession.NewDatascienceNotebookSessionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceNotebookSessionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



