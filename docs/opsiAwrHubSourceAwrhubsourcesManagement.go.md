# `opsiAwrHubSourceAwrhubsourcesManagement` Submodule <a name="`opsiAwrHubSourceAwrhubsourcesManagement` Submodule" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiAwrHubSourceAwrhubsourcesManagement <a name="OpsiAwrHubSourceAwrhubsourcesManagement" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management oci_opsi_awr_hub_source_awrhubsources_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiawrhubsourceawrhubsourcesmanagement"

opsiawrhubsourceawrhubsourcesmanagement.NewOpsiAwrHubSourceAwrhubsourcesManagement(scope Construct, id *string, config OpsiAwrHubSourceAwrhubsourcesManagementConfig) OpsiAwrHubSourceAwrhubsourcesManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig">OpsiAwrHubSourceAwrhubsourcesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig">OpsiAwrHubSourceAwrhubsourcesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.putTimeouts"></a>

```go
func PutTimeouts(value OpsiAwrHubSourceAwrhubsourcesManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts">OpsiAwrHubSourceAwrhubsourcesManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiAwrHubSourceAwrhubsourcesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiawrhubsourceawrhubsourcesmanagement"

opsiawrhubsourceawrhubsourcesmanagement.OpsiAwrHubSourceAwrhubsourcesManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiawrhubsourceawrhubsourcesmanagement"

opsiawrhubsourceawrhubsourcesmanagement.OpsiAwrHubSourceAwrhubsourcesManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiawrhubsourceawrhubsourcesmanagement"

opsiawrhubsourceawrhubsourcesmanagement.OpsiAwrHubSourceAwrhubsourcesManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiawrhubsourceawrhubsourcesmanagement"

opsiawrhubsourceawrhubsourcesmanagement.OpsiAwrHubSourceAwrhubsourcesManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiAwrHubSourceAwrhubsourcesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiAwrHubSourceAwrhubsourcesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiAwrHubSourceAwrhubsourcesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiAwrHubSourceAwrhubsourcesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference">OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.awrHubSourceIdInput">AwrHubSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.enableAwrhubsourceInput">EnableAwrhubsourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.awrHubSourceId">AwrHubSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.enableAwrhubsource">EnableAwrhubsource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.timeouts"></a>

```go
func Timeouts() OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference">OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference</a>

---

##### `AwrHubSourceIdInput`<sup>Optional</sup> <a name="AwrHubSourceIdInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.awrHubSourceIdInput"></a>

```go
func AwrHubSourceIdInput() *string
```

- *Type:* *string

---

##### `EnableAwrhubsourceInput`<sup>Optional</sup> <a name="EnableAwrhubsourceInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.enableAwrhubsourceInput"></a>

```go
func EnableAwrhubsourceInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AwrHubSourceId`<sup>Required</sup> <a name="AwrHubSourceId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.awrHubSourceId"></a>

```go
func AwrHubSourceId() *string
```

- *Type:* *string

---

##### `EnableAwrhubsource`<sup>Required</sup> <a name="EnableAwrhubsource" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.enableAwrhubsource"></a>

```go
func EnableAwrhubsource() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiAwrHubSourceAwrhubsourcesManagementConfig <a name="OpsiAwrHubSourceAwrhubsourcesManagementConfig" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiawrhubsourceawrhubsourcesmanagement"

&opsiawrhubsourceawrhubsourcesmanagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AwrHubSourceId: *string,
	EnableAwrhubsource: interface{},
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.awrHubSourceId">AwrHubSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#awr_hub_source_id OpsiAwrHubSourceAwrhubsourcesManagement#awr_hub_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.enableAwrhubsource">EnableAwrhubsource</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#enable_awrhubsource OpsiAwrHubSourceAwrhubsourcesManagement#enable_awrhubsource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#id OpsiAwrHubSourceAwrhubsourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts">OpsiAwrHubSourceAwrhubsourcesManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwrHubSourceId`<sup>Required</sup> <a name="AwrHubSourceId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.awrHubSourceId"></a>

```go
AwrHubSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#awr_hub_source_id OpsiAwrHubSourceAwrhubsourcesManagement#awr_hub_source_id}.

---

##### `EnableAwrhubsource`<sup>Required</sup> <a name="EnableAwrhubsource" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.enableAwrhubsource"></a>

```go
EnableAwrhubsource interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#enable_awrhubsource OpsiAwrHubSourceAwrhubsourcesManagement#enable_awrhubsource}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#id OpsiAwrHubSourceAwrhubsourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.timeouts"></a>

```go
Timeouts OpsiAwrHubSourceAwrhubsourcesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts">OpsiAwrHubSourceAwrhubsourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#timeouts OpsiAwrHubSourceAwrhubsourcesManagement#timeouts}

---

### OpsiAwrHubSourceAwrhubsourcesManagementTimeouts <a name="OpsiAwrHubSourceAwrhubsourcesManagementTimeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiawrhubsourceawrhubsourcesmanagement"

&opsiawrhubsourceawrhubsourcesmanagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#create OpsiAwrHubSourceAwrhubsourcesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#delete OpsiAwrHubSourceAwrhubsourcesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#update OpsiAwrHubSourceAwrhubsourcesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#create OpsiAwrHubSourceAwrhubsourcesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#delete OpsiAwrHubSourceAwrhubsourcesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#update OpsiAwrHubSourceAwrhubsourcesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference <a name="OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiawrhubsourceawrhubsourcesmanagement"

opsiawrhubsourceawrhubsourcesmanagement.NewOpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



