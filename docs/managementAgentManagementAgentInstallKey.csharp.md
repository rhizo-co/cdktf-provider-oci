# `managementAgentManagementAgentInstallKey` Submodule <a name="`managementAgentManagementAgentInstallKey` Submodule" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementAgentManagementAgentInstallKey <a name="ManagementAgentManagementAgentInstallKey" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key oci_management_agent_management_agent_install_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentInstallKey(Construct Scope, string Id, ManagementAgentManagementAgentInstallKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig">ManagementAgentManagementAgentInstallKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagementAgentManagementAgentInstallKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

---

##### `ResetAllowedKeyInstallCount` <a name="ResetAllowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetAllowedKeyInstallCount"></a>

```csharp
private void ResetAllowedKeyInstallCount()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsUnlimited` <a name="ResetIsUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetIsUnlimited"></a>

```csharp
private void ResetIsUnlimited()
```

##### `ResetTimeExpires` <a name="ResetTimeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeExpires"></a>

```csharp
private void ResetTimeExpires()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementAgentManagementAgentInstallKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementAgentManagementAgentInstallKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementAgentManagementAgentInstallKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ManagementAgentManagementAgentInstallKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagementAgentManagementAgentInstallKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagementAgentManagementAgentInstallKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagementAgentManagementAgentInstallKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagementAgentManagementAgentInstallKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.createdByPrincipalId">CreatedByPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.currentKeyInstallCount">CurrentKeyInstallCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference">ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCountInput">AllowedKeyInstallCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimitedInput">IsUnlimitedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpiresInput">TimeExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCount">AllowedKeyInstallCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimited">IsUnlimited</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpires">TimeExpires</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedByPrincipalId`<sup>Required</sup> <a name="CreatedByPrincipalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.createdByPrincipalId"></a>

```csharp
public string CreatedByPrincipalId { get; }
```

- *Type:* string

---

##### `CurrentKeyInstallCount`<sup>Required</sup> <a name="CurrentKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.currentKeyInstallCount"></a>

```csharp
public double CurrentKeyInstallCount { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeouts"></a>

```csharp
public ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference">ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AllowedKeyInstallCountInput`<sup>Optional</sup> <a name="AllowedKeyInstallCountInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCountInput"></a>

```csharp
public double AllowedKeyInstallCountInput { get; }
```

- *Type:* double

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsUnlimitedInput`<sup>Optional</sup> <a name="IsUnlimitedInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimitedInput"></a>

```csharp
public object IsUnlimitedInput { get; }
```

- *Type:* object

---

##### `TimeExpiresInput`<sup>Optional</sup> <a name="TimeExpiresInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpiresInput"></a>

```csharp
public string TimeExpiresInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowedKeyInstallCount`<sup>Required</sup> <a name="AllowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCount"></a>

```csharp
public double AllowedKeyInstallCount { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimited"></a>

```csharp
public object IsUnlimited { get; }
```

- *Type:* object

---

##### `TimeExpires`<sup>Required</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpires"></a>

```csharp
public string TimeExpires { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementAgentManagementAgentInstallKeyConfig <a name="ManagementAgentManagementAgentInstallKeyConfig" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentInstallKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    double AllowedKeyInstallCount = null,
    string Id = null,
    object IsUnlimited = null,
    string TimeExpires = null,
    ManagementAgentManagementAgentInstallKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.allowedKeyInstallCount">AllowedKeyInstallCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.isUnlimited">IsUnlimited</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeExpires">TimeExpires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}.

---

##### `AllowedKeyInstallCount`<sup>Optional</sup> <a name="AllowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.allowedKeyInstallCount"></a>

```csharp
public double AllowedKeyInstallCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsUnlimited`<sup>Optional</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.isUnlimited"></a>

```csharp
public object IsUnlimited { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}.

---

##### `TimeExpires`<sup>Optional</sup> <a name="TimeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeExpires"></a>

```csharp
public string TimeExpires { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeouts"></a>

```csharp
public ManagementAgentManagementAgentInstallKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#timeouts ManagementAgentManagementAgentInstallKey#timeouts}

---

### ManagementAgentManagementAgentInstallKeyTimeouts <a name="ManagementAgentManagementAgentInstallKeyTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentInstallKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference <a name="ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



