# `waaWebAppAccelerationPolicy` Submodule <a name="`waaWebAppAccelerationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaaWebAppAccelerationPolicy <a name="WaaWebAppAccelerationPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicy(Construct Scope, string Id, WaaWebAppAccelerationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig">WaaWebAppAccelerationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig">WaaWebAppAccelerationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy">PutResponseCachingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy">PutResponseCompressionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCachingPolicy">ResetResponseCachingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCompressionPolicy">ResetResponseCompressionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetSystemTags">ResetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResponseCachingPolicy` <a name="PutResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy"></a>

```csharp
private void PutResponseCachingPolicy(WaaWebAppAccelerationPolicyResponseCachingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCachingPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---

##### `PutResponseCompressionPolicy` <a name="PutResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy"></a>

```csharp
private void PutResponseCompressionPolicy(WaaWebAppAccelerationPolicyResponseCompressionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putResponseCompressionPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(WaaWebAppAccelerationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResponseCachingPolicy` <a name="ResetResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCachingPolicy"></a>

```csharp
private void ResetResponseCachingPolicy()
```

##### `ResetResponseCompressionPolicy` <a name="ResetResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetResponseCompressionPolicy"></a>

```csharp
private void ResetResponseCompressionPolicy()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetSystemTags"></a>

```csharp
private void ResetSystemTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

WaaWebAppAccelerationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

WaaWebAppAccelerationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

WaaWebAppAccelerationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

WaaWebAppAccelerationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WaaWebAppAccelerationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WaaWebAppAccelerationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WaaWebAppAccelerationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicy">ResponseCachingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicy">ResponseCompressionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference">WaaWebAppAccelerationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicyInput">ResponseCachingPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicyInput">ResponseCompressionPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTagsInput">SystemTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTags">SystemTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ResponseCachingPolicy`<sup>Required</sup> <a name="ResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicy"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference ResponseCachingPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference</a>

---

##### `ResponseCompressionPolicy`<sup>Required</sup> <a name="ResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicy"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference ResponseCompressionPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeouts"></a>

```csharp
public WaaWebAppAccelerationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference">WaaWebAppAccelerationPolicyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResponseCachingPolicyInput`<sup>Optional</sup> <a name="ResponseCachingPolicyInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCachingPolicyInput"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCachingPolicy ResponseCachingPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---

##### `ResponseCompressionPolicyInput`<sup>Optional</sup> <a name="ResponseCompressionPolicyInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.responseCompressionPolicyInput"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCompressionPolicy ResponseCompressionPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.systemTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WaaWebAppAccelerationPolicyConfig <a name="WaaWebAppAccelerationPolicyConfig" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    WaaWebAppAccelerationPolicyResponseCachingPolicy ResponseCachingPolicy = null,
    WaaWebAppAccelerationPolicyResponseCompressionPolicy ResponseCompressionPolicy = null,
    System.Collections.Generic.IDictionary<string, string> SystemTags = null,
    WaaWebAppAccelerationPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCachingPolicy">ResponseCachingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | response_caching_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCompressionPolicy">ResponseCompressionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | response_compression_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.systemTags">SystemTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#compartment_id WaaWebAppAccelerationPolicy#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#defined_tags WaaWebAppAccelerationPolicy#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#display_name WaaWebAppAccelerationPolicy#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#freeform_tags WaaWebAppAccelerationPolicy#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#id WaaWebAppAccelerationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResponseCachingPolicy`<sup>Optional</sup> <a name="ResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCachingPolicy"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCachingPolicy ResponseCachingPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

response_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#response_caching_policy WaaWebAppAccelerationPolicy#response_caching_policy}

---

##### `ResponseCompressionPolicy`<sup>Optional</sup> <a name="ResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.responseCompressionPolicy"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCompressionPolicy ResponseCompressionPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

response_compression_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#response_compression_policy WaaWebAppAccelerationPolicy#response_compression_policy}

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.systemTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#system_tags WaaWebAppAccelerationPolicy#system_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyConfig.property.timeouts"></a>

```csharp
public WaaWebAppAccelerationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts">WaaWebAppAccelerationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#timeouts WaaWebAppAccelerationPolicy#timeouts}

---

### WaaWebAppAccelerationPolicyResponseCachingPolicy <a name="WaaWebAppAccelerationPolicyResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyResponseCachingPolicy {
    object IsResponseHeaderBasedCachingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.property.isResponseHeaderBasedCachingEnabled">IsResponseHeaderBasedCachingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_response_header_based_caching_enabled WaaWebAppAccelerationPolicy#is_response_header_based_caching_enabled}. |

---

##### `IsResponseHeaderBasedCachingEnabled`<sup>Optional</sup> <a name="IsResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy.property.isResponseHeaderBasedCachingEnabled"></a>

```csharp
public object IsResponseHeaderBasedCachingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_response_header_based_caching_enabled WaaWebAppAccelerationPolicy#is_response_header_based_caching_enabled}.

---

### WaaWebAppAccelerationPolicyResponseCompressionPolicy <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyResponseCompressionPolicy {
    WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression GzipCompression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.property.gzipCompression">GzipCompression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | gzip_compression block. |

---

##### `GzipCompression`<sup>Optional</sup> <a name="GzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy.property.gzipCompression"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression GzipCompression { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

gzip_compression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#gzip_compression WaaWebAppAccelerationPolicy#gzip_compression}

---

### WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression {
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_enabled WaaWebAppAccelerationPolicy#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#is_enabled WaaWebAppAccelerationPolicy#is_enabled}.

---

### WaaWebAppAccelerationPolicyTimeouts <a name="WaaWebAppAccelerationPolicyTimeouts" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#create WaaWebAppAccelerationPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#delete WaaWebAppAccelerationPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#update WaaWebAppAccelerationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#create WaaWebAppAccelerationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#delete WaaWebAppAccelerationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waa_web_app_acceleration_policy#update WaaWebAppAccelerationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference <a name="WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resetIsResponseHeaderBasedCachingEnabled">ResetIsResponseHeaderBasedCachingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponseHeaderBasedCachingEnabled` <a name="ResetIsResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resetIsResponseHeaderBasedCachingEnabled"></a>

```csharp
private void ResetIsResponseHeaderBasedCachingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabledInput">IsResponseHeaderBasedCachingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">IsResponseHeaderBasedCachingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsResponseHeaderBasedCachingEnabledInput`<sup>Optional</sup> <a name="IsResponseHeaderBasedCachingEnabledInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabledInput"></a>

```csharp
public object IsResponseHeaderBasedCachingEnabledInput { get; }
```

- *Type:* object

---

##### `IsResponseHeaderBasedCachingEnabled`<sup>Required</sup> <a name="IsResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```csharp
public object IsResponseHeaderBasedCachingEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCachingPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCachingPolicy">WaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---


### WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---


### WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference <a name="WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression">PutGzipCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resetGzipCompression">ResetGzipCompression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGzipCompression` <a name="PutGzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression"></a>

```csharp
private void PutGzipCompression(WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.putGzipCompression.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---

##### `ResetGzipCompression` <a name="ResetGzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resetGzipCompression"></a>

```csharp
private void ResetGzipCompression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression">GzipCompression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompressionInput">GzipCompressionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GzipCompression`<sup>Required</sup> <a name="GzipCompression" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference GzipCompression { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference</a>

---

##### `GzipCompressionInput`<sup>Optional</sup> <a name="GzipCompressionInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompressionInput"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression GzipCompressionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">WaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue"></a>

```csharp
public WaaWebAppAccelerationPolicyResponseCompressionPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyResponseCompressionPolicy">WaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---


### WaaWebAppAccelerationPolicyTimeoutsOutputReference <a name="WaaWebAppAccelerationPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WaaWebAppAccelerationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.waaWebAppAccelerationPolicy.WaaWebAppAccelerationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



