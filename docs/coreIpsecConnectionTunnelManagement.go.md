# `coreIpsecConnectionTunnelManagement` Submodule <a name="`coreIpsecConnectionTunnelManagement` Submodule" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreIpsecConnectionTunnelManagement <a name="CoreIpsecConnectionTunnelManagement" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management oci_core_ipsec_connection_tunnel_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.NewCoreIpsecConnectionTunnelManagement(scope Construct, id *string, config CoreIpsecConnectionTunnelManagementConfig) CoreIpsecConnectionTunnelManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig">CoreIpsecConnectionTunnelManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig">CoreIpsecConnectionTunnelManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo">PutBgpSessionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig">PutDpdConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig">PutEncryptionDomainConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails">PutPhaseOneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails">PutPhaseTwoDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetBgpSessionInfo">ResetBgpSessionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDpdConfig">ResetDpdConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetEncryptionDomainConfig">ResetEncryptionDomainConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetIkeVersion">ResetIkeVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetNatTranslationEnabled">ResetNatTranslationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOracleCanInitiate">ResetOracleCanInitiate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseOneDetails">ResetPhaseOneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseTwoDetails">ResetPhaseTwoDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetRouting">ResetRouting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetSharedSecret">ResetSharedSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpSessionInfo` <a name="PutBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo"></a>

```go
func PutBgpSessionInfo(value CoreIpsecConnectionTunnelManagementBgpSessionInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---

##### `PutDpdConfig` <a name="PutDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig"></a>

```go
func PutDpdConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEncryptionDomainConfig` <a name="PutEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig"></a>

```go
func PutEncryptionDomainConfig(value CoreIpsecConnectionTunnelManagementEncryptionDomainConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---

##### `PutPhaseOneDetails` <a name="PutPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails"></a>

```go
func PutPhaseOneDetails(value CoreIpsecConnectionTunnelManagementPhaseOneDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---

##### `PutPhaseTwoDetails` <a name="PutPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails"></a>

```go
func PutPhaseTwoDetails(value CoreIpsecConnectionTunnelManagementPhaseTwoDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts"></a>

```go
func PutTimeouts(value CoreIpsecConnectionTunnelManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

---

##### `ResetBgpSessionInfo` <a name="ResetBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetBgpSessionInfo"></a>

```go
func ResetBgpSessionInfo()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDpdConfig` <a name="ResetDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDpdConfig"></a>

```go
func ResetDpdConfig()
```

##### `ResetEncryptionDomainConfig` <a name="ResetEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetEncryptionDomainConfig"></a>

```go
func ResetEncryptionDomainConfig()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetIkeVersion` <a name="ResetIkeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetIkeVersion"></a>

```go
func ResetIkeVersion()
```

##### `ResetNatTranslationEnabled` <a name="ResetNatTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetNatTranslationEnabled"></a>

```go
func ResetNatTranslationEnabled()
```

##### `ResetOracleCanInitiate` <a name="ResetOracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOracleCanInitiate"></a>

```go
func ResetOracleCanInitiate()
```

##### `ResetPhaseOneDetails` <a name="ResetPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseOneDetails"></a>

```go
func ResetPhaseOneDetails()
```

##### `ResetPhaseTwoDetails` <a name="ResetPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseTwoDetails"></a>

```go
func ResetPhaseTwoDetails()
```

##### `ResetRouting` <a name="ResetRouting" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetRouting"></a>

```go
func ResetRouting()
```

##### `ResetSharedSecret` <a name="ResetSharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetSharedSecret"></a>

```go
func ResetSharedSecret()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreIpsecConnectionTunnelManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreIpsecConnectionTunnelManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreIpsecConnectionTunnelManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreIpsecConnectionTunnelManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreIpsecConnectionTunnelManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.associatedVirtualCircuits">AssociatedVirtualCircuits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfo">BgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference">CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cpeIp">CpeIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfig">DpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList">CoreIpsecConnectionTunnelManagementDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdMode">DpdMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfig">EncryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference">CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetails">PhaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetails">PhaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference">CoreIpsecConnectionTunnelManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.vpnIp">VpnIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfoInput">BgpSessionInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfigInput">DpdConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfigInput">EncryptionDomainConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersionInput">IkeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecIdInput">IpsecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabledInput">NatTranslationEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiateInput">OracleCanInitiateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetailsInput">PhaseOneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetailsInput">PhaseTwoDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routingInput">RoutingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecretInput">SharedSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersion">IkeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecId">IpsecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabled">NatTranslationEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiate">OracleCanInitiate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routing">Routing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedVirtualCircuits`<sup>Required</sup> <a name="AssociatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.associatedVirtualCircuits"></a>

```go
func AssociatedVirtualCircuits() *[]*string
```

- *Type:* *[]*string

---

##### `BgpSessionInfo`<sup>Required</sup> <a name="BgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfo"></a>

```go
func BgpSessionInfo() CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference">CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CpeIp`<sup>Required</sup> <a name="CpeIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cpeIp"></a>

```go
func CpeIp() *string
```

- *Type:* *string

---

##### `DpdConfig`<sup>Required</sup> <a name="DpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfig"></a>

```go
func DpdConfig() CoreIpsecConnectionTunnelManagementDpdConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList">CoreIpsecConnectionTunnelManagementDpdConfigList</a>

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdMode"></a>

```go
func DpdMode() *string
```

- *Type:* *string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdTimeoutInSec"></a>

```go
func DpdTimeoutInSec() *f64
```

- *Type:* *f64

---

##### `EncryptionDomainConfig`<sup>Required</sup> <a name="EncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfig"></a>

```go
func EncryptionDomainConfig() CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference">CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference</a>

---

##### `PhaseOneDetails`<sup>Required</sup> <a name="PhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetails"></a>

```go
func PhaseOneDetails() CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference</a>

---

##### `PhaseTwoDetails`<sup>Required</sup> <a name="PhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetails"></a>

```go
func PhaseTwoDetails() CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeouts"></a>

```go
func Timeouts() CoreIpsecConnectionTunnelManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference">CoreIpsecConnectionTunnelManagementTimeoutsOutputReference</a>

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeStatusUpdated"></a>

```go
func TimeStatusUpdated() *string
```

- *Type:* *string

---

##### `VpnIp`<sup>Required</sup> <a name="VpnIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.vpnIp"></a>

```go
func VpnIp() *string
```

- *Type:* *string

---

##### `BgpSessionInfoInput`<sup>Optional</sup> <a name="BgpSessionInfoInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfoInput"></a>

```go
func BgpSessionInfoInput() CoreIpsecConnectionTunnelManagementBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DpdConfigInput`<sup>Optional</sup> <a name="DpdConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfigInput"></a>

```go
func DpdConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionDomainConfigInput`<sup>Optional</sup> <a name="EncryptionDomainConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfigInput"></a>

```go
func EncryptionDomainConfigInput() CoreIpsecConnectionTunnelManagementEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IkeVersionInput`<sup>Optional</sup> <a name="IkeVersionInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersionInput"></a>

```go
func IkeVersionInput() *string
```

- *Type:* *string

---

##### `IpsecIdInput`<sup>Optional</sup> <a name="IpsecIdInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecIdInput"></a>

```go
func IpsecIdInput() *string
```

- *Type:* *string

---

##### `NatTranslationEnabledInput`<sup>Optional</sup> <a name="NatTranslationEnabledInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabledInput"></a>

```go
func NatTranslationEnabledInput() *string
```

- *Type:* *string

---

##### `OracleCanInitiateInput`<sup>Optional</sup> <a name="OracleCanInitiateInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiateInput"></a>

```go
func OracleCanInitiateInput() *string
```

- *Type:* *string

---

##### `PhaseOneDetailsInput`<sup>Optional</sup> <a name="PhaseOneDetailsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetailsInput"></a>

```go
func PhaseOneDetailsInput() CoreIpsecConnectionTunnelManagementPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---

##### `PhaseTwoDetailsInput`<sup>Optional</sup> <a name="PhaseTwoDetailsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetailsInput"></a>

```go
func PhaseTwoDetailsInput() CoreIpsecConnectionTunnelManagementPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routingInput"></a>

```go
func RoutingInput() *string
```

- *Type:* *string

---

##### `SharedSecretInput`<sup>Optional</sup> <a name="SharedSecretInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecretInput"></a>

```go
func SharedSecretInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersion"></a>

```go
func IkeVersion() *string
```

- *Type:* *string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecId"></a>

```go
func IpsecId() *string
```

- *Type:* *string

---

##### `NatTranslationEnabled`<sup>Required</sup> <a name="NatTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabled"></a>

```go
func NatTranslationEnabled() *string
```

- *Type:* *string

---

##### `OracleCanInitiate`<sup>Required</sup> <a name="OracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiate"></a>

```go
func OracleCanInitiate() *string
```

- *Type:* *string

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routing"></a>

```go
func Routing() *string
```

- *Type:* *string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecret"></a>

```go
func SharedSecret() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreIpsecConnectionTunnelManagementBgpSessionInfo <a name="CoreIpsecConnectionTunnelManagementBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

&coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo {
	CustomerBgpAsn: *string,
	CustomerInterfaceIp: *string,
	CustomerInterfaceIpv6: *string,
	OracleInterfaceIp: *string,
	OracleInterfaceIpv6: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIp">CustomerInterfaceIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIpv6">CustomerInterfaceIpv6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIp">OracleInterfaceIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIpv6">OracleInterfaceIpv6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}. |

---

##### `CustomerBgpAsn`<sup>Optional</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerBgpAsn"></a>

```go
CustomerBgpAsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}.

---

##### `CustomerInterfaceIp`<sup>Optional</sup> <a name="CustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIp"></a>

```go
CustomerInterfaceIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}.

---

##### `CustomerInterfaceIpv6`<sup>Optional</sup> <a name="CustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIpv6"></a>

```go
CustomerInterfaceIpv6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}.

---

##### `OracleInterfaceIp`<sup>Optional</sup> <a name="OracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIp"></a>

```go
OracleInterfaceIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}.

---

##### `OracleInterfaceIpv6`<sup>Optional</sup> <a name="OracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIpv6"></a>

```go
OracleInterfaceIpv6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}.

---

### CoreIpsecConnectionTunnelManagementConfig <a name="CoreIpsecConnectionTunnelManagementConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

&coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpsecId: *string,
	TunnelId: *string,
	BgpSessionInfo: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo,
	DisplayName: *string,
	DpdConfig: interface{},
	EncryptionDomainConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig,
	Id: *string,
	IkeVersion: *string,
	NatTranslationEnabled: *string,
	OracleCanInitiate: *string,
	PhaseOneDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails,
	PhaseTwoDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails,
	Routing: *string,
	SharedSecret: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ipsecId">IpsecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.tunnelId">TunnelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.bgpSessionInfo">BgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | bgp_session_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dpdConfig">DpdConfig</a></code> | <code>interface{}</code> | dpd_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.encryptionDomainConfig">EncryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | encryption_domain_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ikeVersion">IkeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.natTranslationEnabled">NatTranslationEnabled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.oracleCanInitiate">OracleCanInitiate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseOneDetails">PhaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | phase_one_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseTwoDetails">PhaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | phase_two_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.routing">Routing</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.sharedSecret">SharedSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ipsecId"></a>

```go
IpsecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}.

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}.

---

##### `BgpSessionInfo`<sup>Optional</sup> <a name="BgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.bgpSessionInfo"></a>

```go
BgpSessionInfo CoreIpsecConnectionTunnelManagementBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

bgp_session_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#bgp_session_info CoreIpsecConnectionTunnelManagement#bgp_session_info}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}.

---

##### `DpdConfig`<sup>Optional</sup> <a name="DpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dpdConfig"></a>

```go
DpdConfig interface{}
```

- *Type:* interface{}

dpd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_config CoreIpsecConnectionTunnelManagement#dpd_config}

---

##### `EncryptionDomainConfig`<sup>Optional</sup> <a name="EncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.encryptionDomainConfig"></a>

```go
EncryptionDomainConfig CoreIpsecConnectionTunnelManagementEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

encryption_domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#encryption_domain_config CoreIpsecConnectionTunnelManagement#encryption_domain_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IkeVersion`<sup>Optional</sup> <a name="IkeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ikeVersion"></a>

```go
IkeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}.

---

##### `NatTranslationEnabled`<sup>Optional</sup> <a name="NatTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.natTranslationEnabled"></a>

```go
NatTranslationEnabled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}.

---

##### `OracleCanInitiate`<sup>Optional</sup> <a name="OracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.oracleCanInitiate"></a>

```go
OracleCanInitiate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}.

---

##### `PhaseOneDetails`<sup>Optional</sup> <a name="PhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseOneDetails"></a>

```go
PhaseOneDetails CoreIpsecConnectionTunnelManagementPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

phase_one_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_one_details CoreIpsecConnectionTunnelManagement#phase_one_details}

---

##### `PhaseTwoDetails`<sup>Optional</sup> <a name="PhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseTwoDetails"></a>

```go
PhaseTwoDetails CoreIpsecConnectionTunnelManagementPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

phase_two_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_two_details CoreIpsecConnectionTunnelManagement#phase_two_details}

---

##### `Routing`<sup>Optional</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.routing"></a>

```go
Routing *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}.

---

##### `SharedSecret`<sup>Optional</sup> <a name="SharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.sharedSecret"></a>

```go
SharedSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.timeouts"></a>

```go
Timeouts CoreIpsecConnectionTunnelManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#timeouts CoreIpsecConnectionTunnelManagement#timeouts}

---

### CoreIpsecConnectionTunnelManagementDpdConfig <a name="CoreIpsecConnectionTunnelManagementDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

&coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagementDpdConfig {
	DpdMode: *string,
	DpdTimeoutInSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdMode">DpdMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}. |

---

##### `DpdMode`<sup>Optional</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdMode"></a>

```go
DpdMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}.

---

##### `DpdTimeoutInSec`<sup>Optional</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdTimeoutInSec"></a>

```go
DpdTimeoutInSec *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}.

---

### CoreIpsecConnectionTunnelManagementEncryptionDomainConfig <a name="CoreIpsecConnectionTunnelManagementEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

&coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig {
	CpeTrafficSelector: *[]*string,
	OracleTrafficSelector: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.cpeTrafficSelector">CpeTrafficSelector</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.oracleTrafficSelector">OracleTrafficSelector</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}. |

---

##### `CpeTrafficSelector`<sup>Optional</sup> <a name="CpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.cpeTrafficSelector"></a>

```go
CpeTrafficSelector *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}.

---

##### `OracleTrafficSelector`<sup>Optional</sup> <a name="OracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.oracleTrafficSelector"></a>

```go
OracleTrafficSelector *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}.

---

### CoreIpsecConnectionTunnelManagementPhaseOneDetails <a name="CoreIpsecConnectionTunnelManagementPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

&coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails {
	CustomAuthenticationAlgorithm: *string,
	CustomDhGroup: *string,
	CustomEncryptionAlgorithm: *string,
	IsCustomPhaseOneConfig: interface{},
	Lifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customDhGroup">CustomDhGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.isCustomPhaseOneConfig">IsCustomPhaseOneConfig</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.lifetime">Lifetime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}. |

---

##### `CustomAuthenticationAlgorithm`<sup>Optional</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customAuthenticationAlgorithm"></a>

```go
CustomAuthenticationAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

##### `CustomDhGroup`<sup>Optional</sup> <a name="CustomDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customDhGroup"></a>

```go
CustomDhGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}.

---

##### `CustomEncryptionAlgorithm`<sup>Optional</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customEncryptionAlgorithm"></a>

```go
CustomEncryptionAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

##### `IsCustomPhaseOneConfig`<sup>Optional</sup> <a name="IsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.isCustomPhaseOneConfig"></a>

```go
IsCustomPhaseOneConfig interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.lifetime"></a>

```go
Lifetime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

### CoreIpsecConnectionTunnelManagementPhaseTwoDetails <a name="CoreIpsecConnectionTunnelManagementPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

&coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails {
	CustomAuthenticationAlgorithm: *string,
	CustomEncryptionAlgorithm: *string,
	DhGroup: *string,
	IsCustomPhaseTwoConfig: interface{},
	IsPfsEnabled: interface{},
	Lifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.dhGroup">DhGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isCustomPhaseTwoConfig">IsCustomPhaseTwoConfig</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isPfsEnabled">IsPfsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.lifetime">Lifetime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}. |

---

##### `CustomAuthenticationAlgorithm`<sup>Optional</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customAuthenticationAlgorithm"></a>

```go
CustomAuthenticationAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

##### `CustomEncryptionAlgorithm`<sup>Optional</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customEncryptionAlgorithm"></a>

```go
CustomEncryptionAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

##### `DhGroup`<sup>Optional</sup> <a name="DhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.dhGroup"></a>

```go
DhGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}.

---

##### `IsCustomPhaseTwoConfig`<sup>Optional</sup> <a name="IsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isCustomPhaseTwoConfig"></a>

```go
IsCustomPhaseTwoConfig interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}.

---

##### `IsPfsEnabled`<sup>Optional</sup> <a name="IsPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isPfsEnabled"></a>

```go
IsPfsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.lifetime"></a>

```go
Lifetime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

### CoreIpsecConnectionTunnelManagementTimeouts <a name="CoreIpsecConnectionTunnelManagementTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

&coreipsecconnectiontunnelmanagement.CoreIpsecConnectionTunnelManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference <a name="CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.NewCoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerBgpAsn">ResetCustomerBgpAsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIp">ResetCustomerInterfaceIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIpv6">ResetCustomerInterfaceIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIp">ResetOracleInterfaceIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIpv6">ResetOracleInterfaceIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerBgpAsn` <a name="ResetCustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerBgpAsn"></a>

```go
func ResetCustomerBgpAsn()
```

##### `ResetCustomerInterfaceIp` <a name="ResetCustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIp"></a>

```go
func ResetCustomerInterfaceIp()
```

##### `ResetCustomerInterfaceIpv6` <a name="ResetCustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIpv6"></a>

```go
func ResetCustomerInterfaceIpv6()
```

##### `ResetOracleInterfaceIp` <a name="ResetOracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIp"></a>

```go
func ResetOracleInterfaceIp()
```

##### `ResetOracleInterfaceIpv6` <a name="ResetOracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIpv6"></a>

```go
func ResetOracleInterfaceIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpIpv6State">BgpIpv6State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpState">BgpState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsnInput">CustomerBgpAsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpInput">CustomerInterfaceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6Input">CustomerInterfaceIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpInput">OracleInterfaceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6Input">OracleInterfaceIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIp">CustomerInterfaceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6">CustomerInterfaceIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIp">OracleInterfaceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">OracleInterfaceIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpIpv6State`<sup>Required</sup> <a name="BgpIpv6State" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```go
func BgpIpv6State() *string
```

- *Type:* *string

---

##### `BgpState`<sup>Required</sup> <a name="BgpState" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpState"></a>

```go
func BgpState() *string
```

- *Type:* *string

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```go
func OracleBgpAsn() *string
```

- *Type:* *string

---

##### `CustomerBgpAsnInput`<sup>Optional</sup> <a name="CustomerBgpAsnInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsnInput"></a>

```go
func CustomerBgpAsnInput() *string
```

- *Type:* *string

---

##### `CustomerInterfaceIpInput`<sup>Optional</sup> <a name="CustomerInterfaceIpInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpInput"></a>

```go
func CustomerInterfaceIpInput() *string
```

- *Type:* *string

---

##### `CustomerInterfaceIpv6Input`<sup>Optional</sup> <a name="CustomerInterfaceIpv6Input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6Input"></a>

```go
func CustomerInterfaceIpv6Input() *string
```

- *Type:* *string

---

##### `OracleInterfaceIpInput`<sup>Optional</sup> <a name="OracleInterfaceIpInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpInput"></a>

```go
func OracleInterfaceIpInput() *string
```

- *Type:* *string

---

##### `OracleInterfaceIpv6Input`<sup>Optional</sup> <a name="OracleInterfaceIpv6Input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6Input"></a>

```go
func OracleInterfaceIpv6Input() *string
```

- *Type:* *string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```go
func CustomerBgpAsn() *string
```

- *Type:* *string

---

##### `CustomerInterfaceIp`<sup>Required</sup> <a name="CustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```go
func CustomerInterfaceIp() *string
```

- *Type:* *string

---

##### `CustomerInterfaceIpv6`<sup>Required</sup> <a name="CustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```go
func CustomerInterfaceIpv6() *string
```

- *Type:* *string

---

##### `OracleInterfaceIp`<sup>Required</sup> <a name="OracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```go
func OracleInterfaceIp() *string
```

- *Type:* *string

---

##### `OracleInterfaceIpv6`<sup>Required</sup> <a name="OracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```go
func OracleInterfaceIpv6() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreIpsecConnectionTunnelManagementBgpSessionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---


### CoreIpsecConnectionTunnelManagementDpdConfigList <a name="CoreIpsecConnectionTunnelManagementDpdConfigList" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.NewCoreIpsecConnectionTunnelManagementDpdConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreIpsecConnectionTunnelManagementDpdConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get"></a>

```go
func Get(index *f64) CoreIpsecConnectionTunnelManagementDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreIpsecConnectionTunnelManagementDpdConfigOutputReference <a name="CoreIpsecConnectionTunnelManagementDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.NewCoreIpsecConnectionTunnelManagementDpdConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreIpsecConnectionTunnelManagementDpdConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdMode">ResetDpdMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdTimeoutInSec">ResetDpdTimeoutInSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDpdMode` <a name="ResetDpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdMode"></a>

```go
func ResetDpdMode()
```

##### `ResetDpdTimeoutInSec` <a name="ResetDpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdTimeoutInSec"></a>

```go
func ResetDpdTimeoutInSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdModeInput">DpdModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSecInput">DpdTimeoutInSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdMode">DpdMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DpdModeInput`<sup>Optional</sup> <a name="DpdModeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdModeInput"></a>

```go
func DpdModeInput() *string
```

- *Type:* *string

---

##### `DpdTimeoutInSecInput`<sup>Optional</sup> <a name="DpdTimeoutInSecInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSecInput"></a>

```go
func DpdTimeoutInSecInput() *f64
```

- *Type:* *f64

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdMode"></a>

```go
func DpdMode() *string
```

- *Type:* *string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```go
func DpdTimeoutInSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference <a name="CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.NewCoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetCpeTrafficSelector">ResetCpeTrafficSelector</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetOracleTrafficSelector">ResetOracleTrafficSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpeTrafficSelector` <a name="ResetCpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetCpeTrafficSelector"></a>

```go
func ResetCpeTrafficSelector()
```

##### `ResetOracleTrafficSelector` <a name="ResetOracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetOracleTrafficSelector"></a>

```go
func ResetOracleTrafficSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelectorInput">CpeTrafficSelectorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelectorInput">OracleTrafficSelectorInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">CpeTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">OracleTrafficSelector</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpeTrafficSelectorInput`<sup>Optional</sup> <a name="CpeTrafficSelectorInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelectorInput"></a>

```go
func CpeTrafficSelectorInput() *[]*string
```

- *Type:* *[]*string

---

##### `OracleTrafficSelectorInput`<sup>Optional</sup> <a name="OracleTrafficSelectorInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelectorInput"></a>

```go
func OracleTrafficSelectorInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpeTrafficSelector`<sup>Required</sup> <a name="CpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```go
func CpeTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `OracleTrafficSelector`<sup>Required</sup> <a name="OracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```go
func OracleTrafficSelector() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreIpsecConnectionTunnelManagementEncryptionDomainConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---


### CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference <a name="CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.NewCoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomAuthenticationAlgorithm">ResetCustomAuthenticationAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomDhGroup">ResetCustomDhGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomEncryptionAlgorithm">ResetCustomEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetIsCustomPhaseOneConfig">ResetIsCustomPhaseOneConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomAuthenticationAlgorithm` <a name="ResetCustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomAuthenticationAlgorithm"></a>

```go
func ResetCustomAuthenticationAlgorithm()
```

##### `ResetCustomDhGroup` <a name="ResetCustomDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomDhGroup"></a>

```go
func ResetCustomDhGroup()
```

##### `ResetCustomEncryptionAlgorithm` <a name="ResetCustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomEncryptionAlgorithm"></a>

```go
func ResetCustomEncryptionAlgorithm()
```

##### `ResetIsCustomPhaseOneConfig` <a name="ResetIsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetIsCustomPhaseOneConfig"></a>

```go
func ResetIsCustomPhaseOneConfig()
```

##### `ResetLifetime` <a name="ResetLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isIkeEstablished">IsIkeEstablished</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithmInput">CustomAuthenticationAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroupInput">CustomDhGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithmInput">CustomEncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfigInput">IsCustomPhaseOneConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroup">CustomDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">IsCustomPhaseOneConfig</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsIkeEstablished`<sup>Required</sup> <a name="IsIkeEstablished" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```go
func IsIkeEstablished() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```go
func NegotiatedAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```go
func NegotiatedDhGroup() *string
```

- *Type:* *string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```go
func NegotiatedEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```go
func RemainingLifetime() *string
```

- *Type:* *string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```go
func RemainingLifetimeInt() *f64
```

- *Type:* *f64

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```go
func RemainingLifetimeLastRetrieved() *string
```

- *Type:* *string

---

##### `CustomAuthenticationAlgorithmInput`<sup>Optional</sup> <a name="CustomAuthenticationAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithmInput"></a>

```go
func CustomAuthenticationAlgorithmInput() *string
```

- *Type:* *string

---

##### `CustomDhGroupInput`<sup>Optional</sup> <a name="CustomDhGroupInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroupInput"></a>

```go
func CustomDhGroupInput() *string
```

- *Type:* *string

---

##### `CustomEncryptionAlgorithmInput`<sup>Optional</sup> <a name="CustomEncryptionAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithmInput"></a>

```go
func CustomEncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `IsCustomPhaseOneConfigInput`<sup>Optional</sup> <a name="IsCustomPhaseOneConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfigInput"></a>

```go
func IsCustomPhaseOneConfigInput() interface{}
```

- *Type:* interface{}

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *f64
```

- *Type:* *f64

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```go
func CustomAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `CustomDhGroup`<sup>Required</sup> <a name="CustomDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```go
func CustomDhGroup() *string
```

- *Type:* *string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```go
func CustomEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `IsCustomPhaseOneConfig`<sup>Required</sup> <a name="IsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```go
func IsCustomPhaseOneConfig() interface{}
```

- *Type:* interface{}

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreIpsecConnectionTunnelManagementPhaseOneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---


### CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference <a name="CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.NewCoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomAuthenticationAlgorithm">ResetCustomAuthenticationAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomEncryptionAlgorithm">ResetCustomEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetDhGroup">ResetDhGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsCustomPhaseTwoConfig">ResetIsCustomPhaseTwoConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsPfsEnabled">ResetIsPfsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomAuthenticationAlgorithm` <a name="ResetCustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomAuthenticationAlgorithm"></a>

```go
func ResetCustomAuthenticationAlgorithm()
```

##### `ResetCustomEncryptionAlgorithm` <a name="ResetCustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomEncryptionAlgorithm"></a>

```go
func ResetCustomEncryptionAlgorithm()
```

##### `ResetDhGroup` <a name="ResetDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetDhGroup"></a>

```go
func ResetDhGroup()
```

##### `ResetIsCustomPhaseTwoConfig` <a name="ResetIsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsCustomPhaseTwoConfig"></a>

```go
func ResetIsCustomPhaseTwoConfig()
```

##### `ResetIsPfsEnabled` <a name="ResetIsPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsPfsEnabled"></a>

```go
func ResetIsPfsEnabled()
```

##### `ResetLifetime` <a name="ResetLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isEspEstablished">IsEspEstablished</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithmInput">CustomAuthenticationAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithmInput">CustomEncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfigInput">IsCustomPhaseTwoConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabledInput">IsPfsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">IsCustomPhaseTwoConfig</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabled">IsPfsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEspEstablished`<sup>Required</sup> <a name="IsEspEstablished" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```go
func IsEspEstablished() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```go
func NegotiatedAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```go
func NegotiatedDhGroup() *string
```

- *Type:* *string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```go
func NegotiatedEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```go
func RemainingLifetime() *string
```

- *Type:* *string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```go
func RemainingLifetimeInt() *f64
```

- *Type:* *f64

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```go
func RemainingLifetimeLastRetrieved() *string
```

- *Type:* *string

---

##### `CustomAuthenticationAlgorithmInput`<sup>Optional</sup> <a name="CustomAuthenticationAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithmInput"></a>

```go
func CustomAuthenticationAlgorithmInput() *string
```

- *Type:* *string

---

##### `CustomEncryptionAlgorithmInput`<sup>Optional</sup> <a name="CustomEncryptionAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithmInput"></a>

```go
func CustomEncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroupInput"></a>

```go
func DhGroupInput() *string
```

- *Type:* *string

---

##### `IsCustomPhaseTwoConfigInput`<sup>Optional</sup> <a name="IsCustomPhaseTwoConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfigInput"></a>

```go
func IsCustomPhaseTwoConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IsPfsEnabledInput`<sup>Optional</sup> <a name="IsPfsEnabledInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabledInput"></a>

```go
func IsPfsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *f64
```

- *Type:* *f64

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```go
func CustomAuthenticationAlgorithm() *string
```

- *Type:* *string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```go
func CustomEncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `IsCustomPhaseTwoConfig`<sup>Required</sup> <a name="IsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```go
func IsCustomPhaseTwoConfig() interface{}
```

- *Type:* interface{}

---

##### `IsPfsEnabled`<sup>Required</sup> <a name="IsPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```go
func IsPfsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreIpsecConnectionTunnelManagementPhaseTwoDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---


### CoreIpsecConnectionTunnelManagementTimeoutsOutputReference <a name="CoreIpsecConnectionTunnelManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreipsecconnectiontunnelmanagement"

coreipsecconnectiontunnelmanagement.NewCoreIpsecConnectionTunnelManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreIpsecConnectionTunnelManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



