# `delegateAccessControlDelegationControl` Submodule <a name="`delegateAccessControlDelegationControl` Submodule" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DelegateAccessControlDelegationControl <a name="DelegateAccessControlDelegationControl" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DelegateAccessControlDelegationControl(Construct Scope, string Id, DelegateAccessControlDelegationControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig">DelegateAccessControlDelegationControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig">DelegateAccessControlDelegationControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetIsAutoApproveDuringMaintenance">ResetIsAutoApproveDuringMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetNumApprovalsRequired">ResetNumApprovalsRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetPreApprovedServiceProviderActionNames">ResetPreApprovedServiceProviderActionNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultId">ResetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultKeyId">ResetVaultKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts"></a>

```csharp
private void PutTimeouts(DelegateAccessControlDelegationControlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAutoApproveDuringMaintenance` <a name="ResetIsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetIsAutoApproveDuringMaintenance"></a>

```csharp
private void ResetIsAutoApproveDuringMaintenance()
```

##### `ResetNumApprovalsRequired` <a name="ResetNumApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetNumApprovalsRequired"></a>

```csharp
private void ResetNumApprovalsRequired()
```

##### `ResetPreApprovedServiceProviderActionNames` <a name="ResetPreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetPreApprovedServiceProviderActionNames"></a>

```csharp
private void ResetPreApprovedServiceProviderActionNames()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultId"></a>

```csharp
private void ResetVaultId()
```

##### `ResetVaultKeyId` <a name="ResetVaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.resetVaultKeyId"></a>

```csharp
private void ResetVaultKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DelegateAccessControlDelegationControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DelegateAccessControlDelegationControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DelegateAccessControlDelegationControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DelegateAccessControlDelegationControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DelegateAccessControlDelegationControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DelegateAccessControlDelegationControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DelegateAccessControlDelegationControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeDeleted">TimeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference">DelegateAccessControlDelegationControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIdsInput">DelegationSubscriptionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenanceInput">IsAutoApproveDuringMaintenanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormatInput">NotificationMessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicIdInput">NotificationTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequiredInput">NumApprovalsRequiredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNamesInput">PreApprovedServiceProviderActionNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyIdInput">VaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIds">DelegationSubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormat">NotificationMessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicId">NotificationTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequired">NumApprovalsRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames">PreApprovedServiceProviderActionNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyId">VaultKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDeleted`<sup>Required</sup> <a name="TimeDeleted" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeDeleted"></a>

```csharp
public string TimeDeleted { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeouts"></a>

```csharp
public DelegateAccessControlDelegationControlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference">DelegateAccessControlDelegationControlTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DelegationSubscriptionIdsInput`<sup>Optional</sup> <a name="DelegationSubscriptionIdsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIdsInput"></a>

```csharp
public string[] DelegationSubscriptionIdsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAutoApproveDuringMaintenanceInput`<sup>Optional</sup> <a name="IsAutoApproveDuringMaintenanceInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenanceInput"></a>

```csharp
public object IsAutoApproveDuringMaintenanceInput { get; }
```

- *Type:* object

---

##### `NotificationMessageFormatInput`<sup>Optional</sup> <a name="NotificationMessageFormatInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormatInput"></a>

```csharp
public string NotificationMessageFormatInput { get; }
```

- *Type:* string

---

##### `NotificationTopicIdInput`<sup>Optional</sup> <a name="NotificationTopicIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicIdInput"></a>

```csharp
public string NotificationTopicIdInput { get; }
```

- *Type:* string

---

##### `NumApprovalsRequiredInput`<sup>Optional</sup> <a name="NumApprovalsRequiredInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequiredInput"></a>

```csharp
public double NumApprovalsRequiredInput { get; }
```

- *Type:* double

---

##### `PreApprovedServiceProviderActionNamesInput`<sup>Optional</sup> <a name="PreApprovedServiceProviderActionNamesInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNamesInput"></a>

```csharp
public string[] PreApprovedServiceProviderActionNamesInput { get; }
```

- *Type:* string[]

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIdsInput"></a>

```csharp
public string[] ResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `VaultKeyIdInput`<sup>Optional</sup> <a name="VaultKeyIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyIdInput"></a>

```csharp
public string VaultKeyIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DelegationSubscriptionIds`<sup>Required</sup> <a name="DelegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.delegationSubscriptionIds"></a>

```csharp
public string[] DelegationSubscriptionIds { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutoApproveDuringMaintenance`<sup>Required</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance"></a>

```csharp
public object IsAutoApproveDuringMaintenance { get; }
```

- *Type:* object

---

##### `NotificationMessageFormat`<sup>Required</sup> <a name="NotificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationMessageFormat"></a>

```csharp
public string NotificationMessageFormat { get; }
```

- *Type:* string

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.notificationTopicId"></a>

```csharp
public string NotificationTopicId { get; }
```

- *Type:* string

---

##### `NumApprovalsRequired`<sup>Required</sup> <a name="NumApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.numApprovalsRequired"></a>

```csharp
public double NumApprovalsRequired { get; }
```

- *Type:* double

---

##### `PreApprovedServiceProviderActionNames`<sup>Required</sup> <a name="PreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames"></a>

```csharp
public string[] PreApprovedServiceProviderActionNames { get; }
```

- *Type:* string[]

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `VaultKeyId`<sup>Required</sup> <a name="VaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.vaultKeyId"></a>

```csharp
public string VaultKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DelegateAccessControlDelegationControlConfig <a name="DelegateAccessControlDelegationControlConfig" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DelegateAccessControlDelegationControlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string[] DelegationSubscriptionIds,
    string DisplayName,
    string NotificationMessageFormat,
    string NotificationTopicId,
    string[] ResourceIds,
    string ResourceType,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsAutoApproveDuringMaintenance = null,
    double NumApprovalsRequired = null,
    string[] PreApprovedServiceProviderActionNames = null,
    DelegateAccessControlDelegationControlTimeouts Timeouts = null,
    string VaultId = null,
    string VaultKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.delegationSubscriptionIds">DelegationSubscriptionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationMessageFormat">NotificationMessageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationTopicId">NotificationTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.isAutoApproveDuringMaintenance">IsAutoApproveDuringMaintenance</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.numApprovalsRequired">NumApprovalsRequired</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.preApprovedServiceProviderActionNames">PreApprovedServiceProviderActionNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultKeyId">VaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#compartment_id DelegateAccessControlDelegationControl#compartment_id}.

---

##### `DelegationSubscriptionIds`<sup>Required</sup> <a name="DelegationSubscriptionIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.delegationSubscriptionIds"></a>

```csharp
public string[] DelegationSubscriptionIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delegation_subscription_ids DelegateAccessControlDelegationControl#delegation_subscription_ids}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#display_name DelegateAccessControlDelegationControl#display_name}.

---

##### `NotificationMessageFormat`<sup>Required</sup> <a name="NotificationMessageFormat" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationMessageFormat"></a>

```csharp
public string NotificationMessageFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_message_format DelegateAccessControlDelegationControl#notification_message_format}.

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.notificationTopicId"></a>

```csharp
public string NotificationTopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#notification_topic_id DelegateAccessControlDelegationControl#notification_topic_id}.

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_ids DelegateAccessControlDelegationControl#resource_ids}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#resource_type DelegateAccessControlDelegationControl#resource_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#defined_tags DelegateAccessControlDelegationControl#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#description DelegateAccessControlDelegationControl#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#freeform_tags DelegateAccessControlDelegationControl#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#id DelegateAccessControlDelegationControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutoApproveDuringMaintenance`<sup>Optional</sup> <a name="IsAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.isAutoApproveDuringMaintenance"></a>

```csharp
public object IsAutoApproveDuringMaintenance { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#is_auto_approve_during_maintenance DelegateAccessControlDelegationControl#is_auto_approve_during_maintenance}.

---

##### `NumApprovalsRequired`<sup>Optional</sup> <a name="NumApprovalsRequired" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.numApprovalsRequired"></a>

```csharp
public double NumApprovalsRequired { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#num_approvals_required DelegateAccessControlDelegationControl#num_approvals_required}.

---

##### `PreApprovedServiceProviderActionNames`<sup>Optional</sup> <a name="PreApprovedServiceProviderActionNames" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.preApprovedServiceProviderActionNames"></a>

```csharp
public string[] PreApprovedServiceProviderActionNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#pre_approved_service_provider_action_names DelegateAccessControlDelegationControl#pre_approved_service_provider_action_names}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.timeouts"></a>

```csharp
public DelegateAccessControlDelegationControlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts">DelegateAccessControlDelegationControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#timeouts DelegateAccessControlDelegationControl#timeouts}

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_id DelegateAccessControlDelegationControl#vault_id}.

---

##### `VaultKeyId`<sup>Optional</sup> <a name="VaultKeyId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlConfig.property.vaultKeyId"></a>

```csharp
public string VaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#vault_key_id DelegateAccessControlDelegationControl#vault_key_id}.

---

### DelegateAccessControlDelegationControlTimeouts <a name="DelegateAccessControlDelegationControlTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DelegateAccessControlDelegationControlTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#create DelegateAccessControlDelegationControl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#delete DelegateAccessControlDelegationControl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_control#update DelegateAccessControlDelegationControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DelegateAccessControlDelegationControlTimeoutsOutputReference <a name="DelegateAccessControlDelegationControlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DelegateAccessControlDelegationControlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationControl.DelegateAccessControlDelegationControlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



