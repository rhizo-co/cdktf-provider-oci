# `coreIpsecConnectionTunnelManagement` Submodule <a name="`coreIpsecConnectionTunnelManagement` Submodule" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreIpsecConnectionTunnelManagement <a name="CoreIpsecConnectionTunnelManagement" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management oci_core_ipsec_connection_tunnel_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagement(Construct Scope, string Id, CoreIpsecConnectionTunnelManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig">CoreIpsecConnectionTunnelManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpSessionInfo` <a name="PutBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo"></a>

```csharp
private void PutBgpSessionInfo(CoreIpsecConnectionTunnelManagementBgpSessionInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---

##### `PutDpdConfig` <a name="PutDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig"></a>

```csharp
private void PutDpdConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig.parameter.value"></a>

- *Type:* object

---

##### `PutEncryptionDomainConfig` <a name="PutEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig"></a>

```csharp
private void PutEncryptionDomainConfig(CoreIpsecConnectionTunnelManagementEncryptionDomainConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---

##### `PutPhaseOneDetails` <a name="PutPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails"></a>

```csharp
private void PutPhaseOneDetails(CoreIpsecConnectionTunnelManagementPhaseOneDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---

##### `PutPhaseTwoDetails` <a name="PutPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails"></a>

```csharp
private void PutPhaseTwoDetails(CoreIpsecConnectionTunnelManagementPhaseTwoDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreIpsecConnectionTunnelManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

---

##### `ResetBgpSessionInfo` <a name="ResetBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetBgpSessionInfo"></a>

```csharp
private void ResetBgpSessionInfo()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDpdConfig` <a name="ResetDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDpdConfig"></a>

```csharp
private void ResetDpdConfig()
```

##### `ResetEncryptionDomainConfig` <a name="ResetEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetEncryptionDomainConfig"></a>

```csharp
private void ResetEncryptionDomainConfig()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIkeVersion` <a name="ResetIkeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetIkeVersion"></a>

```csharp
private void ResetIkeVersion()
```

##### `ResetNatTranslationEnabled` <a name="ResetNatTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetNatTranslationEnabled"></a>

```csharp
private void ResetNatTranslationEnabled()
```

##### `ResetOracleCanInitiate` <a name="ResetOracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOracleCanInitiate"></a>

```csharp
private void ResetOracleCanInitiate()
```

##### `ResetPhaseOneDetails` <a name="ResetPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseOneDetails"></a>

```csharp
private void ResetPhaseOneDetails()
```

##### `ResetPhaseTwoDetails` <a name="ResetPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseTwoDetails"></a>

```csharp
private void ResetPhaseTwoDetails()
```

##### `ResetRouting` <a name="ResetRouting" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetRouting"></a>

```csharp
private void ResetRouting()
```

##### `ResetSharedSecret` <a name="ResetSharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetSharedSecret"></a>

```csharp
private void ResetSharedSecret()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreIpsecConnectionTunnelManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreIpsecConnectionTunnelManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreIpsecConnectionTunnelManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreIpsecConnectionTunnelManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreIpsecConnectionTunnelManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreIpsecConnectionTunnelManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreIpsecConnectionTunnelManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreIpsecConnectionTunnelManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.associatedVirtualCircuits">AssociatedVirtualCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfo">BgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference">CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cpeIp">CpeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfig">DpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList">CoreIpsecConnectionTunnelManagementDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdMode">DpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfig">EncryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference">CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetails">PhaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetails">PhaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference">CoreIpsecConnectionTunnelManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.vpnIp">VpnIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfoInput">BgpSessionInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfigInput">DpdConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfigInput">EncryptionDomainConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersionInput">IkeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecIdInput">IpsecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabledInput">NatTranslationEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiateInput">OracleCanInitiateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetailsInput">PhaseOneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetailsInput">PhaseTwoDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routingInput">RoutingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecretInput">SharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersion">IkeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecId">IpsecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabled">NatTranslationEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiate">OracleCanInitiate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routing">Routing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssociatedVirtualCircuits`<sup>Required</sup> <a name="AssociatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.associatedVirtualCircuits"></a>

```csharp
public string[] AssociatedVirtualCircuits { get; }
```

- *Type:* string[]

---

##### `BgpSessionInfo`<sup>Required</sup> <a name="BgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfo"></a>

```csharp
public CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference BgpSessionInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference">CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpeIp`<sup>Required</sup> <a name="CpeIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cpeIp"></a>

```csharp
public string CpeIp { get; }
```

- *Type:* string

---

##### `DpdConfig`<sup>Required</sup> <a name="DpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfig"></a>

```csharp
public CoreIpsecConnectionTunnelManagementDpdConfigList DpdConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList">CoreIpsecConnectionTunnelManagementDpdConfigList</a>

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdMode"></a>

```csharp
public string DpdMode { get; }
```

- *Type:* string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdTimeoutInSec"></a>

```csharp
public double DpdTimeoutInSec { get; }
```

- *Type:* double

---

##### `EncryptionDomainConfig`<sup>Required</sup> <a name="EncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfig"></a>

```csharp
public CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference EncryptionDomainConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference">CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference</a>

---

##### `PhaseOneDetails`<sup>Required</sup> <a name="PhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetails"></a>

```csharp
public CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference PhaseOneDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference</a>

---

##### `PhaseTwoDetails`<sup>Required</sup> <a name="PhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetails"></a>

```csharp
public CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference PhaseTwoDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeouts"></a>

```csharp
public CoreIpsecConnectionTunnelManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference">CoreIpsecConnectionTunnelManagementTimeoutsOutputReference</a>

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeStatusUpdated"></a>

```csharp
public string TimeStatusUpdated { get; }
```

- *Type:* string

---

##### `VpnIp`<sup>Required</sup> <a name="VpnIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.vpnIp"></a>

```csharp
public string VpnIp { get; }
```

- *Type:* string

---

##### `BgpSessionInfoInput`<sup>Optional</sup> <a name="BgpSessionInfoInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfoInput"></a>

```csharp
public CoreIpsecConnectionTunnelManagementBgpSessionInfo BgpSessionInfoInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DpdConfigInput`<sup>Optional</sup> <a name="DpdConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfigInput"></a>

```csharp
public object DpdConfigInput { get; }
```

- *Type:* object

---

##### `EncryptionDomainConfigInput`<sup>Optional</sup> <a name="EncryptionDomainConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfigInput"></a>

```csharp
public CoreIpsecConnectionTunnelManagementEncryptionDomainConfig EncryptionDomainConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IkeVersionInput`<sup>Optional</sup> <a name="IkeVersionInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersionInput"></a>

```csharp
public string IkeVersionInput { get; }
```

- *Type:* string

---

##### `IpsecIdInput`<sup>Optional</sup> <a name="IpsecIdInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecIdInput"></a>

```csharp
public string IpsecIdInput { get; }
```

- *Type:* string

---

##### `NatTranslationEnabledInput`<sup>Optional</sup> <a name="NatTranslationEnabledInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabledInput"></a>

```csharp
public string NatTranslationEnabledInput { get; }
```

- *Type:* string

---

##### `OracleCanInitiateInput`<sup>Optional</sup> <a name="OracleCanInitiateInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiateInput"></a>

```csharp
public string OracleCanInitiateInput { get; }
```

- *Type:* string

---

##### `PhaseOneDetailsInput`<sup>Optional</sup> <a name="PhaseOneDetailsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetailsInput"></a>

```csharp
public CoreIpsecConnectionTunnelManagementPhaseOneDetails PhaseOneDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---

##### `PhaseTwoDetailsInput`<sup>Optional</sup> <a name="PhaseTwoDetailsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetailsInput"></a>

```csharp
public CoreIpsecConnectionTunnelManagementPhaseTwoDetails PhaseTwoDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routingInput"></a>

```csharp
public string RoutingInput { get; }
```

- *Type:* string

---

##### `SharedSecretInput`<sup>Optional</sup> <a name="SharedSecretInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecretInput"></a>

```csharp
public string SharedSecretInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IkeVersion`<sup>Required</sup> <a name="IkeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersion"></a>

```csharp
public string IkeVersion { get; }
```

- *Type:* string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecId"></a>

```csharp
public string IpsecId { get; }
```

- *Type:* string

---

##### `NatTranslationEnabled`<sup>Required</sup> <a name="NatTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabled"></a>

```csharp
public string NatTranslationEnabled { get; }
```

- *Type:* string

---

##### `OracleCanInitiate`<sup>Required</sup> <a name="OracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiate"></a>

```csharp
public string OracleCanInitiate { get; }
```

- *Type:* string

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routing"></a>

```csharp
public string Routing { get; }
```

- *Type:* string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreIpsecConnectionTunnelManagementBgpSessionInfo <a name="CoreIpsecConnectionTunnelManagementBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementBgpSessionInfo {
    string CustomerBgpAsn = null,
    string CustomerInterfaceIp = null,
    string CustomerInterfaceIpv6 = null,
    string OracleInterfaceIp = null,
    string OracleInterfaceIpv6 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIp">CustomerInterfaceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIpv6">CustomerInterfaceIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIp">OracleInterfaceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIpv6">OracleInterfaceIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}. |

---

##### `CustomerBgpAsn`<sup>Optional</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerBgpAsn"></a>

```csharp
public string CustomerBgpAsn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}.

---

##### `CustomerInterfaceIp`<sup>Optional</sup> <a name="CustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIp"></a>

```csharp
public string CustomerInterfaceIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}.

---

##### `CustomerInterfaceIpv6`<sup>Optional</sup> <a name="CustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIpv6"></a>

```csharp
public string CustomerInterfaceIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}.

---

##### `OracleInterfaceIp`<sup>Optional</sup> <a name="OracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIp"></a>

```csharp
public string OracleInterfaceIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}.

---

##### `OracleInterfaceIpv6`<sup>Optional</sup> <a name="OracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIpv6"></a>

```csharp
public string OracleInterfaceIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}.

---

### CoreIpsecConnectionTunnelManagementConfig <a name="CoreIpsecConnectionTunnelManagementConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpsecId,
    string TunnelId,
    CoreIpsecConnectionTunnelManagementBgpSessionInfo BgpSessionInfo = null,
    string DisplayName = null,
    object DpdConfig = null,
    CoreIpsecConnectionTunnelManagementEncryptionDomainConfig EncryptionDomainConfig = null,
    string Id = null,
    string IkeVersion = null,
    string NatTranslationEnabled = null,
    string OracleCanInitiate = null,
    CoreIpsecConnectionTunnelManagementPhaseOneDetails PhaseOneDetails = null,
    CoreIpsecConnectionTunnelManagementPhaseTwoDetails PhaseTwoDetails = null,
    string Routing = null,
    string SharedSecret = null,
    CoreIpsecConnectionTunnelManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ipsecId">IpsecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.bgpSessionInfo">BgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | bgp_session_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dpdConfig">DpdConfig</a></code> | <code>object</code> | dpd_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.encryptionDomainConfig">EncryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | encryption_domain_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ikeVersion">IkeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.natTranslationEnabled">NatTranslationEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.oracleCanInitiate">OracleCanInitiate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseOneDetails">PhaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | phase_one_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseTwoDetails">PhaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | phase_two_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.routing">Routing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ipsecId"></a>

```csharp
public string IpsecId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}.

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}.

---

##### `BgpSessionInfo`<sup>Optional</sup> <a name="BgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.bgpSessionInfo"></a>

```csharp
public CoreIpsecConnectionTunnelManagementBgpSessionInfo BgpSessionInfo { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

bgp_session_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#bgp_session_info CoreIpsecConnectionTunnelManagement#bgp_session_info}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}.

---

##### `DpdConfig`<sup>Optional</sup> <a name="DpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dpdConfig"></a>

```csharp
public object DpdConfig { get; set; }
```

- *Type:* object

dpd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_config CoreIpsecConnectionTunnelManagement#dpd_config}

---

##### `EncryptionDomainConfig`<sup>Optional</sup> <a name="EncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.encryptionDomainConfig"></a>

```csharp
public CoreIpsecConnectionTunnelManagementEncryptionDomainConfig EncryptionDomainConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

encryption_domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#encryption_domain_config CoreIpsecConnectionTunnelManagement#encryption_domain_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IkeVersion`<sup>Optional</sup> <a name="IkeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ikeVersion"></a>

```csharp
public string IkeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}.

---

##### `NatTranslationEnabled`<sup>Optional</sup> <a name="NatTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.natTranslationEnabled"></a>

```csharp
public string NatTranslationEnabled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}.

---

##### `OracleCanInitiate`<sup>Optional</sup> <a name="OracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.oracleCanInitiate"></a>

```csharp
public string OracleCanInitiate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}.

---

##### `PhaseOneDetails`<sup>Optional</sup> <a name="PhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseOneDetails"></a>

```csharp
public CoreIpsecConnectionTunnelManagementPhaseOneDetails PhaseOneDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

phase_one_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_one_details CoreIpsecConnectionTunnelManagement#phase_one_details}

---

##### `PhaseTwoDetails`<sup>Optional</sup> <a name="PhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseTwoDetails"></a>

```csharp
public CoreIpsecConnectionTunnelManagementPhaseTwoDetails PhaseTwoDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

phase_two_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_two_details CoreIpsecConnectionTunnelManagement#phase_two_details}

---

##### `Routing`<sup>Optional</sup> <a name="Routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.routing"></a>

```csharp
public string Routing { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}.

---

##### `SharedSecret`<sup>Optional</sup> <a name="SharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.timeouts"></a>

```csharp
public CoreIpsecConnectionTunnelManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#timeouts CoreIpsecConnectionTunnelManagement#timeouts}

---

### CoreIpsecConnectionTunnelManagementDpdConfig <a name="CoreIpsecConnectionTunnelManagementDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementDpdConfig {
    string DpdMode = null,
    double DpdTimeoutInSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdMode">DpdMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}. |

---

##### `DpdMode`<sup>Optional</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdMode"></a>

```csharp
public string DpdMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}.

---

##### `DpdTimeoutInSec`<sup>Optional</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdTimeoutInSec"></a>

```csharp
public double DpdTimeoutInSec { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}.

---

### CoreIpsecConnectionTunnelManagementEncryptionDomainConfig <a name="CoreIpsecConnectionTunnelManagementEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementEncryptionDomainConfig {
    string[] CpeTrafficSelector = null,
    string[] OracleTrafficSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.cpeTrafficSelector">CpeTrafficSelector</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.oracleTrafficSelector">OracleTrafficSelector</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}. |

---

##### `CpeTrafficSelector`<sup>Optional</sup> <a name="CpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.cpeTrafficSelector"></a>

```csharp
public string[] CpeTrafficSelector { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}.

---

##### `OracleTrafficSelector`<sup>Optional</sup> <a name="OracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.oracleTrafficSelector"></a>

```csharp
public string[] OracleTrafficSelector { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}.

---

### CoreIpsecConnectionTunnelManagementPhaseOneDetails <a name="CoreIpsecConnectionTunnelManagementPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementPhaseOneDetails {
    string CustomAuthenticationAlgorithm = null,
    string CustomDhGroup = null,
    string CustomEncryptionAlgorithm = null,
    object IsCustomPhaseOneConfig = null,
    double Lifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customDhGroup">CustomDhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.isCustomPhaseOneConfig">IsCustomPhaseOneConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.lifetime">Lifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}. |

---

##### `CustomAuthenticationAlgorithm`<sup>Optional</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customAuthenticationAlgorithm"></a>

```csharp
public string CustomAuthenticationAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

##### `CustomDhGroup`<sup>Optional</sup> <a name="CustomDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customDhGroup"></a>

```csharp
public string CustomDhGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}.

---

##### `CustomEncryptionAlgorithm`<sup>Optional</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customEncryptionAlgorithm"></a>

```csharp
public string CustomEncryptionAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

##### `IsCustomPhaseOneConfig`<sup>Optional</sup> <a name="IsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.isCustomPhaseOneConfig"></a>

```csharp
public object IsCustomPhaseOneConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.lifetime"></a>

```csharp
public double Lifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

### CoreIpsecConnectionTunnelManagementPhaseTwoDetails <a name="CoreIpsecConnectionTunnelManagementPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementPhaseTwoDetails {
    string CustomAuthenticationAlgorithm = null,
    string CustomEncryptionAlgorithm = null,
    string DhGroup = null,
    object IsCustomPhaseTwoConfig = null,
    object IsPfsEnabled = null,
    double Lifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.dhGroup">DhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isCustomPhaseTwoConfig">IsCustomPhaseTwoConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isPfsEnabled">IsPfsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.lifetime">Lifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}. |

---

##### `CustomAuthenticationAlgorithm`<sup>Optional</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customAuthenticationAlgorithm"></a>

```csharp
public string CustomAuthenticationAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

##### `CustomEncryptionAlgorithm`<sup>Optional</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customEncryptionAlgorithm"></a>

```csharp
public string CustomEncryptionAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

##### `DhGroup`<sup>Optional</sup> <a name="DhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.dhGroup"></a>

```csharp
public string DhGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}.

---

##### `IsCustomPhaseTwoConfig`<sup>Optional</sup> <a name="IsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isCustomPhaseTwoConfig"></a>

```csharp
public object IsCustomPhaseTwoConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}.

---

##### `IsPfsEnabled`<sup>Optional</sup> <a name="IsPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isPfsEnabled"></a>

```csharp
public object IsPfsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.lifetime"></a>

```csharp
public double Lifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

### CoreIpsecConnectionTunnelManagementTimeouts <a name="CoreIpsecConnectionTunnelManagementTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference <a name="CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerBgpAsn` <a name="ResetCustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerBgpAsn"></a>

```csharp
private void ResetCustomerBgpAsn()
```

##### `ResetCustomerInterfaceIp` <a name="ResetCustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIp"></a>

```csharp
private void ResetCustomerInterfaceIp()
```

##### `ResetCustomerInterfaceIpv6` <a name="ResetCustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIpv6"></a>

```csharp
private void ResetCustomerInterfaceIpv6()
```

##### `ResetOracleInterfaceIp` <a name="ResetOracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIp"></a>

```csharp
private void ResetOracleInterfaceIp()
```

##### `ResetOracleInterfaceIpv6` <a name="ResetOracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIpv6"></a>

```csharp
private void ResetOracleInterfaceIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpIpv6State">BgpIpv6State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpState">BgpState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsnInput">CustomerBgpAsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpInput">CustomerInterfaceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6Input">CustomerInterfaceIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpInput">OracleInterfaceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6Input">OracleInterfaceIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIp">CustomerInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6">CustomerInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIp">OracleInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">OracleInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpIpv6State`<sup>Required</sup> <a name="BgpIpv6State" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```csharp
public string BgpIpv6State { get; }
```

- *Type:* string

---

##### `BgpState`<sup>Required</sup> <a name="BgpState" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpState"></a>

```csharp
public string BgpState { get; }
```

- *Type:* string

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```csharp
public string OracleBgpAsn { get; }
```

- *Type:* string

---

##### `CustomerBgpAsnInput`<sup>Optional</sup> <a name="CustomerBgpAsnInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsnInput"></a>

```csharp
public string CustomerBgpAsnInput { get; }
```

- *Type:* string

---

##### `CustomerInterfaceIpInput`<sup>Optional</sup> <a name="CustomerInterfaceIpInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpInput"></a>

```csharp
public string CustomerInterfaceIpInput { get; }
```

- *Type:* string

---

##### `CustomerInterfaceIpv6Input`<sup>Optional</sup> <a name="CustomerInterfaceIpv6Input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6Input"></a>

```csharp
public string CustomerInterfaceIpv6Input { get; }
```

- *Type:* string

---

##### `OracleInterfaceIpInput`<sup>Optional</sup> <a name="OracleInterfaceIpInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpInput"></a>

```csharp
public string OracleInterfaceIpInput { get; }
```

- *Type:* string

---

##### `OracleInterfaceIpv6Input`<sup>Optional</sup> <a name="OracleInterfaceIpv6Input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6Input"></a>

```csharp
public string OracleInterfaceIpv6Input { get; }
```

- *Type:* string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```csharp
public string CustomerBgpAsn { get; }
```

- *Type:* string

---

##### `CustomerInterfaceIp`<sup>Required</sup> <a name="CustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```csharp
public string CustomerInterfaceIp { get; }
```

- *Type:* string

---

##### `CustomerInterfaceIpv6`<sup>Required</sup> <a name="CustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```csharp
public string CustomerInterfaceIpv6 { get; }
```

- *Type:* string

---

##### `OracleInterfaceIp`<sup>Required</sup> <a name="OracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```csharp
public string OracleInterfaceIp { get; }
```

- *Type:* string

---

##### `OracleInterfaceIpv6`<sup>Required</sup> <a name="OracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```csharp
public string OracleInterfaceIpv6 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.internalValue"></a>

```csharp
public CoreIpsecConnectionTunnelManagementBgpSessionInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---


### CoreIpsecConnectionTunnelManagementDpdConfigList <a name="CoreIpsecConnectionTunnelManagementDpdConfigList" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementDpdConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get"></a>

```csharp
private CoreIpsecConnectionTunnelManagementDpdConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreIpsecConnectionTunnelManagementDpdConfigOutputReference <a name="CoreIpsecConnectionTunnelManagementDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementDpdConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDpdMode` <a name="ResetDpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdMode"></a>

```csharp
private void ResetDpdMode()
```

##### `ResetDpdTimeoutInSec` <a name="ResetDpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdTimeoutInSec"></a>

```csharp
private void ResetDpdTimeoutInSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdModeInput">DpdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSecInput">DpdTimeoutInSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdMode">DpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSec">DpdTimeoutInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DpdModeInput`<sup>Optional</sup> <a name="DpdModeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdModeInput"></a>

```csharp
public string DpdModeInput { get; }
```

- *Type:* string

---

##### `DpdTimeoutInSecInput`<sup>Optional</sup> <a name="DpdTimeoutInSecInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSecInput"></a>

```csharp
public double DpdTimeoutInSecInput { get; }
```

- *Type:* double

---

##### `DpdMode`<sup>Required</sup> <a name="DpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdMode"></a>

```csharp
public string DpdMode { get; }
```

- *Type:* string

---

##### `DpdTimeoutInSec`<sup>Required</sup> <a name="DpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```csharp
public double DpdTimeoutInSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference <a name="CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpeTrafficSelector` <a name="ResetCpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetCpeTrafficSelector"></a>

```csharp
private void ResetCpeTrafficSelector()
```

##### `ResetOracleTrafficSelector` <a name="ResetOracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetOracleTrafficSelector"></a>

```csharp
private void ResetOracleTrafficSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelectorInput">CpeTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelectorInput">OracleTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">CpeTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">OracleTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpeTrafficSelectorInput`<sup>Optional</sup> <a name="CpeTrafficSelectorInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelectorInput"></a>

```csharp
public string[] CpeTrafficSelectorInput { get; }
```

- *Type:* string[]

---

##### `OracleTrafficSelectorInput`<sup>Optional</sup> <a name="OracleTrafficSelectorInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelectorInput"></a>

```csharp
public string[] OracleTrafficSelectorInput { get; }
```

- *Type:* string[]

---

##### `CpeTrafficSelector`<sup>Required</sup> <a name="CpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```csharp
public string[] CpeTrafficSelector { get; }
```

- *Type:* string[]

---

##### `OracleTrafficSelector`<sup>Required</sup> <a name="OracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```csharp
public string[] OracleTrafficSelector { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.internalValue"></a>

```csharp
public CoreIpsecConnectionTunnelManagementEncryptionDomainConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---


### CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference <a name="CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomAuthenticationAlgorithm` <a name="ResetCustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomAuthenticationAlgorithm"></a>

```csharp
private void ResetCustomAuthenticationAlgorithm()
```

##### `ResetCustomDhGroup` <a name="ResetCustomDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomDhGroup"></a>

```csharp
private void ResetCustomDhGroup()
```

##### `ResetCustomEncryptionAlgorithm` <a name="ResetCustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomEncryptionAlgorithm"></a>

```csharp
private void ResetCustomEncryptionAlgorithm()
```

##### `ResetIsCustomPhaseOneConfig` <a name="ResetIsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetIsCustomPhaseOneConfig"></a>

```csharp
private void ResetIsCustomPhaseOneConfig()
```

##### `ResetLifetime` <a name="ResetLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isIkeEstablished">IsIkeEstablished</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithmInput">CustomAuthenticationAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroupInput">CustomDhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithmInput">CustomEncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfigInput">IsCustomPhaseOneConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroup">CustomDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">IsCustomPhaseOneConfig</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsIkeEstablished`<sup>Required</sup> <a name="IsIkeEstablished" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```csharp
public IResolvable IsIkeEstablished { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```csharp
public string NegotiatedAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```csharp
public string NegotiatedDhGroup { get; }
```

- *Type:* string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```csharp
public string NegotiatedEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```csharp
public string RemainingLifetime { get; }
```

- *Type:* string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```csharp
public double RemainingLifetimeInt { get; }
```

- *Type:* double

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```csharp
public string RemainingLifetimeLastRetrieved { get; }
```

- *Type:* string

---

##### `CustomAuthenticationAlgorithmInput`<sup>Optional</sup> <a name="CustomAuthenticationAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithmInput"></a>

```csharp
public string CustomAuthenticationAlgorithmInput { get; }
```

- *Type:* string

---

##### `CustomDhGroupInput`<sup>Optional</sup> <a name="CustomDhGroupInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroupInput"></a>

```csharp
public string CustomDhGroupInput { get; }
```

- *Type:* string

---

##### `CustomEncryptionAlgorithmInput`<sup>Optional</sup> <a name="CustomEncryptionAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithmInput"></a>

```csharp
public string CustomEncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `IsCustomPhaseOneConfigInput`<sup>Optional</sup> <a name="IsCustomPhaseOneConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfigInput"></a>

```csharp
public object IsCustomPhaseOneConfigInput { get; }
```

- *Type:* object

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetimeInput"></a>

```csharp
public double LifetimeInput { get; }
```

- *Type:* double

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```csharp
public string CustomAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `CustomDhGroup`<sup>Required</sup> <a name="CustomDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```csharp
public string CustomDhGroup { get; }
```

- *Type:* string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```csharp
public string CustomEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `IsCustomPhaseOneConfig`<sup>Required</sup> <a name="IsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```csharp
public object IsCustomPhaseOneConfig { get; }
```

- *Type:* object

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreIpsecConnectionTunnelManagementPhaseOneDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---


### CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference <a name="CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomAuthenticationAlgorithm` <a name="ResetCustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomAuthenticationAlgorithm"></a>

```csharp
private void ResetCustomAuthenticationAlgorithm()
```

##### `ResetCustomEncryptionAlgorithm` <a name="ResetCustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomEncryptionAlgorithm"></a>

```csharp
private void ResetCustomEncryptionAlgorithm()
```

##### `ResetDhGroup` <a name="ResetDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetDhGroup"></a>

```csharp
private void ResetDhGroup()
```

##### `ResetIsCustomPhaseTwoConfig` <a name="ResetIsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsCustomPhaseTwoConfig"></a>

```csharp
private void ResetIsCustomPhaseTwoConfig()
```

##### `ResetIsPfsEnabled` <a name="ResetIsPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsPfsEnabled"></a>

```csharp
private void ResetIsPfsEnabled()
```

##### `ResetLifetime` <a name="ResetLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isEspEstablished">IsEspEstablished</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">NegotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">NegotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">NegotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetime">RemainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">RemainingLifetimeInt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">RemainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithmInput">CustomAuthenticationAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithmInput">CustomEncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfigInput">IsCustomPhaseTwoConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabledInput">IsPfsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">CustomAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">CustomEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroup">DhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">IsCustomPhaseTwoConfig</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabled">IsPfsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEspEstablished`<sup>Required</sup> <a name="IsEspEstablished" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```csharp
public IResolvable IsEspEstablished { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NegotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="NegotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```csharp
public string NegotiatedAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `NegotiatedDhGroup`<sup>Required</sup> <a name="NegotiatedDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```csharp
public string NegotiatedDhGroup { get; }
```

- *Type:* string

---

##### `NegotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="NegotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```csharp
public string NegotiatedEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `RemainingLifetime`<sup>Required</sup> <a name="RemainingLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```csharp
public string RemainingLifetime { get; }
```

- *Type:* string

---

##### `RemainingLifetimeInt`<sup>Required</sup> <a name="RemainingLifetimeInt" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```csharp
public double RemainingLifetimeInt { get; }
```

- *Type:* double

---

##### `RemainingLifetimeLastRetrieved`<sup>Required</sup> <a name="RemainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```csharp
public string RemainingLifetimeLastRetrieved { get; }
```

- *Type:* string

---

##### `CustomAuthenticationAlgorithmInput`<sup>Optional</sup> <a name="CustomAuthenticationAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithmInput"></a>

```csharp
public string CustomAuthenticationAlgorithmInput { get; }
```

- *Type:* string

---

##### `CustomEncryptionAlgorithmInput`<sup>Optional</sup> <a name="CustomEncryptionAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithmInput"></a>

```csharp
public string CustomEncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroupInput"></a>

```csharp
public string DhGroupInput { get; }
```

- *Type:* string

---

##### `IsCustomPhaseTwoConfigInput`<sup>Optional</sup> <a name="IsCustomPhaseTwoConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfigInput"></a>

```csharp
public object IsCustomPhaseTwoConfigInput { get; }
```

- *Type:* object

---

##### `IsPfsEnabledInput`<sup>Optional</sup> <a name="IsPfsEnabledInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabledInput"></a>

```csharp
public object IsPfsEnabledInput { get; }
```

- *Type:* object

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetimeInput"></a>

```csharp
public double LifetimeInput { get; }
```

- *Type:* double

---

##### `CustomAuthenticationAlgorithm`<sup>Required</sup> <a name="CustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```csharp
public string CustomAuthenticationAlgorithm { get; }
```

- *Type:* string

---

##### `CustomEncryptionAlgorithm`<sup>Required</sup> <a name="CustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```csharp
public string CustomEncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```csharp
public string DhGroup { get; }
```

- *Type:* string

---

##### `IsCustomPhaseTwoConfig`<sup>Required</sup> <a name="IsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```csharp
public object IsCustomPhaseTwoConfig { get; }
```

- *Type:* object

---

##### `IsPfsEnabled`<sup>Required</sup> <a name="IsPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```csharp
public object IsPfsEnabled { get; }
```

- *Type:* object

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.internalValue"></a>

```csharp
public CoreIpsecConnectionTunnelManagementPhaseTwoDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---


### CoreIpsecConnectionTunnelManagementTimeoutsOutputReference <a name="CoreIpsecConnectionTunnelManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreIpsecConnectionTunnelManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



