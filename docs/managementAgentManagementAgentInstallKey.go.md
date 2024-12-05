# `managementAgentManagementAgentInstallKey` Submodule <a name="`managementAgentManagementAgentInstallKey` Submodule" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementAgentManagementAgentInstallKey <a name="ManagementAgentManagementAgentInstallKey" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key oci_management_agent_management_agent_install_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementagentmanagementagentinstallkey"

managementagentmanagementagentinstallkey.NewManagementAgentManagementAgentInstallKey(scope Construct, id *string, config ManagementAgentManagementAgentInstallKeyConfig) ManagementAgentManagementAgentInstallKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig">ManagementAgentManagementAgentInstallKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig">ManagementAgentManagementAgentInstallKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetAllowedKeyInstallCount">ResetAllowedKeyInstallCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetIsUnlimited">ResetIsUnlimited</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeExpires">ResetTimeExpires</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts"></a>

```go
func PutTimeouts(value ManagementAgentManagementAgentInstallKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

---

##### `ResetAllowedKeyInstallCount` <a name="ResetAllowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetAllowedKeyInstallCount"></a>

```go
func ResetAllowedKeyInstallCount()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetId"></a>

```go
func ResetId()
```

##### `ResetIsUnlimited` <a name="ResetIsUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetIsUnlimited"></a>

```go
func ResetIsUnlimited()
```

##### `ResetTimeExpires` <a name="ResetTimeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeExpires"></a>

```go
func ResetTimeExpires()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementAgentManagementAgentInstallKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementagentmanagementagentinstallkey"

managementagentmanagementagentinstallkey.ManagementAgentManagementAgentInstallKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementagentmanagementagentinstallkey"

managementagentmanagementagentinstallkey.ManagementAgentManagementAgentInstallKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementagentmanagementagentinstallkey"

managementagentmanagementagentinstallkey.ManagementAgentManagementAgentInstallKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementagentmanagementagentinstallkey"

managementagentmanagementagentinstallkey.ManagementAgentManagementAgentInstallKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagementAgentManagementAgentInstallKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagementAgentManagementAgentInstallKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagementAgentManagementAgentInstallKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagementAgentManagementAgentInstallKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.createdByPrincipalId">CreatedByPrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.currentKeyInstallCount">CurrentKeyInstallCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference">ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCountInput">AllowedKeyInstallCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimitedInput">IsUnlimitedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpiresInput">TimeExpiresInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCount">AllowedKeyInstallCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimited">IsUnlimited</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedByPrincipalId`<sup>Required</sup> <a name="CreatedByPrincipalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.createdByPrincipalId"></a>

```go
func CreatedByPrincipalId() *string
```

- *Type:* *string

---

##### `CurrentKeyInstallCount`<sup>Required</sup> <a name="CurrentKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.currentKeyInstallCount"></a>

```go
func CurrentKeyInstallCount() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeouts"></a>

```go
func Timeouts() ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference">ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AllowedKeyInstallCountInput`<sup>Optional</sup> <a name="AllowedKeyInstallCountInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCountInput"></a>

```go
func AllowedKeyInstallCountInput() *f64
```

- *Type:* *f64

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsUnlimitedInput`<sup>Optional</sup> <a name="IsUnlimitedInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimitedInput"></a>

```go
func IsUnlimitedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeExpiresInput`<sup>Optional</sup> <a name="TimeExpiresInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpiresInput"></a>

```go
func TimeExpiresInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedKeyInstallCount`<sup>Required</sup> <a name="AllowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCount"></a>

```go
func AllowedKeyInstallCount() *f64
```

- *Type:* *f64

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimited"></a>

```go
func IsUnlimited() interface{}
```

- *Type:* interface{}

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpires"></a>

```go
func TimeExpires() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementAgentManagementAgentInstallKeyConfig <a name="ManagementAgentManagementAgentInstallKeyConfig" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementagentmanagementagentinstallkey"

&managementagentmanagementagentinstallkey.ManagementAgentManagementAgentInstallKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	AllowedKeyInstallCount: *f64,
	Id: *string,
	IsUnlimited: interface{},
	TimeExpires: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.allowedKeyInstallCount">AllowedKeyInstallCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.isUnlimited">IsUnlimited</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeExpires">TimeExpires</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}.

---

##### `AllowedKeyInstallCount`<sup>Optional</sup> <a name="AllowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.allowedKeyInstallCount"></a>

```go
AllowedKeyInstallCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsUnlimited`<sup>Optional</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.isUnlimited"></a>

```go
IsUnlimited interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}.

---

##### `TimeExpires`<sup>Optional</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeExpires"></a>

```go
TimeExpires *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeouts"></a>

```go
Timeouts ManagementAgentManagementAgentInstallKeyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#timeouts ManagementAgentManagementAgentInstallKey#timeouts}

---

### ManagementAgentManagementAgentInstallKeyTimeouts <a name="ManagementAgentManagementAgentInstallKeyTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementagentmanagementagentinstallkey"

&managementagentmanagementagentinstallkey.ManagementAgentManagementAgentInstallKeyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference <a name="ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/managementagentmanagementagentinstallkey"

managementagentmanagementagentinstallkey.NewManagementAgentManagementAgentInstallKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



