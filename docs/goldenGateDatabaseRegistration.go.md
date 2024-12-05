# `goldenGateDatabaseRegistration` Submodule <a name="`goldenGateDatabaseRegistration` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDatabaseRegistration <a name="GoldenGateDatabaseRegistration" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration oci_golden_gate_database_registration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedatabaseregistration"

goldengatedatabaseregistration.NewGoldenGateDatabaseRegistration(scope Construct, id *string, config GoldenGateDatabaseRegistrationConfig) GoldenGateDatabaseRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig">GoldenGateDatabaseRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig">GoldenGateDatabaseRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSecretCompartmentId">ResetSecretCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSessionMode">ResetSessionMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetVaultId">ResetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetWallet">ResetWallet</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.putTimeouts"></a>

```go
func PutTimeouts(value GoldenGateDatabaseRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a>

---

##### `ResetConnectionString` <a name="ResetConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetKeyId` <a name="ResetKeyId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetKeyId"></a>

```go
func ResetKeyId()
```

##### `ResetSecretCompartmentId` <a name="ResetSecretCompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSecretCompartmentId"></a>

```go
func ResetSecretCompartmentId()
```

##### `ResetSessionMode` <a name="ResetSessionMode" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSessionMode"></a>

```go
func ResetSessionMode()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetVaultId"></a>

```go
func ResetVaultId()
```

##### `ResetWallet` <a name="ResetWallet" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetWallet"></a>

```go
func ResetWallet()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDatabaseRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedatabaseregistration"

goldengatedatabaseregistration.GoldenGateDatabaseRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedatabaseregistration"

goldengatedatabaseregistration.GoldenGateDatabaseRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedatabaseregistration"

goldengatedatabaseregistration.GoldenGateDatabaseRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedatabaseregistration"

goldengatedatabaseregistration.GoldenGateDatabaseRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoldenGateDatabaseRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoldenGateDatabaseRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoldenGateDatabaseRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDatabaseRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.rcePrivateIp">RcePrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference">GoldenGateDatabaseRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.aliasNameInput">AliasNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretCompartmentIdInput">SecretCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.sessionModeInput">SessionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.walletInput">WalletInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.aliasName">AliasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretCompartmentId">SecretCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.sessionMode">SessionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.wallet">Wallet</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RcePrivateIp`<sup>Required</sup> <a name="RcePrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.rcePrivateIp"></a>

```go
func RcePrivateIp() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeouts"></a>

```go
func Timeouts() GoldenGateDatabaseRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference">GoldenGateDatabaseRegistrationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.aliasNameInput"></a>

```go
func AliasNameInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `SecretCompartmentIdInput`<sup>Optional</sup> <a name="SecretCompartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretCompartmentIdInput"></a>

```go
func SecretCompartmentIdInput() *string
```

- *Type:* *string

---

##### `SessionModeInput`<sup>Optional</sup> <a name="SessionModeInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.sessionModeInput"></a>

```go
func SessionModeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `WalletInput`<sup>Optional</sup> <a name="WalletInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.walletInput"></a>

```go
func WalletInput() *string
```

- *Type:* *string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.aliasName"></a>

```go
func AliasName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SecretCompartmentId`<sup>Required</sup> <a name="SecretCompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretCompartmentId"></a>

```go
func SecretCompartmentId() *string
```

- *Type:* *string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.sessionMode"></a>

```go
func SessionMode() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `Wallet`<sup>Required</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.wallet"></a>

```go
func Wallet() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDatabaseRegistrationConfig <a name="GoldenGateDatabaseRegistrationConfig" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedatabaseregistration"

&goldengatedatabaseregistration.GoldenGateDatabaseRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AliasName: *string,
	CompartmentId: *string,
	DisplayName: *string,
	Fqdn: *string,
	Password: *string,
	Username: *string,
	ConnectionString: *string,
	DatabaseId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IpAddress: *string,
	KeyId: *string,
	SecretCompartmentId: *string,
	SessionMode: *string,
	SubnetId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts,
	VaultId: *string,
	Wallet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.aliasName">AliasName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#alias_name GoldenGateDatabaseRegistration#alias_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#compartment_id GoldenGateDatabaseRegistration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#display_name GoldenGateDatabaseRegistration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.fqdn">Fqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#fqdn GoldenGateDatabaseRegistration#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#password GoldenGateDatabaseRegistration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#username GoldenGateDatabaseRegistration#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#connection_string GoldenGateDatabaseRegistration#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#database_id GoldenGateDatabaseRegistration#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#defined_tags GoldenGateDatabaseRegistration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#description GoldenGateDatabaseRegistration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#freeform_tags GoldenGateDatabaseRegistration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#id GoldenGateDatabaseRegistration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#ip_address GoldenGateDatabaseRegistration#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#key_id GoldenGateDatabaseRegistration#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.secretCompartmentId">SecretCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#secret_compartment_id GoldenGateDatabaseRegistration#secret_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.sessionMode">SessionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#session_mode GoldenGateDatabaseRegistration#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#subnet_id GoldenGateDatabaseRegistration#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#vault_id GoldenGateDatabaseRegistration#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.wallet">Wallet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#wallet GoldenGateDatabaseRegistration#wallet}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.aliasName"></a>

```go
AliasName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#alias_name GoldenGateDatabaseRegistration#alias_name}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#compartment_id GoldenGateDatabaseRegistration#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#display_name GoldenGateDatabaseRegistration#display_name}.

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#fqdn GoldenGateDatabaseRegistration#fqdn}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#password GoldenGateDatabaseRegistration#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#username GoldenGateDatabaseRegistration#username}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#connection_string GoldenGateDatabaseRegistration#connection_string}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#database_id GoldenGateDatabaseRegistration#database_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#defined_tags GoldenGateDatabaseRegistration#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#description GoldenGateDatabaseRegistration#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#freeform_tags GoldenGateDatabaseRegistration#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#id GoldenGateDatabaseRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#ip_address GoldenGateDatabaseRegistration#ip_address}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#key_id GoldenGateDatabaseRegistration#key_id}.

---

##### `SecretCompartmentId`<sup>Optional</sup> <a name="SecretCompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.secretCompartmentId"></a>

```go
SecretCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#secret_compartment_id GoldenGateDatabaseRegistration#secret_compartment_id}.

---

##### `SessionMode`<sup>Optional</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.sessionMode"></a>

```go
SessionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#session_mode GoldenGateDatabaseRegistration#session_mode}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#subnet_id GoldenGateDatabaseRegistration#subnet_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.timeouts"></a>

```go
Timeouts GoldenGateDatabaseRegistrationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#timeouts GoldenGateDatabaseRegistration#timeouts}

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#vault_id GoldenGateDatabaseRegistration#vault_id}.

---

##### `Wallet`<sup>Optional</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.wallet"></a>

```go
Wallet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#wallet GoldenGateDatabaseRegistration#wallet}.

---

### GoldenGateDatabaseRegistrationTimeouts <a name="GoldenGateDatabaseRegistrationTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedatabaseregistration"

&goldengatedatabaseregistration.GoldenGateDatabaseRegistrationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#create GoldenGateDatabaseRegistration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#delete GoldenGateDatabaseRegistration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#update GoldenGateDatabaseRegistration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#create GoldenGateDatabaseRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#delete GoldenGateDatabaseRegistration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#update GoldenGateDatabaseRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDatabaseRegistrationTimeoutsOutputReference <a name="GoldenGateDatabaseRegistrationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedatabaseregistration"

goldengatedatabaseregistration.NewGoldenGateDatabaseRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoldenGateDatabaseRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



