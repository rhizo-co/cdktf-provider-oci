# `mediaServicesStreamCdnConfig` Submodule <a name="`mediaServicesStreamCdnConfig` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesStreamCdnConfig <a name="MediaServicesStreamCdnConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfig(Construct Scope, string Id, MediaServicesStreamCdnConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig">MediaServicesStreamCdnConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig">MediaServicesStreamCdnConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig"></a>

```csharp
private void PutConfig(MediaServicesStreamCdnConfigConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(MediaServicesStreamCdnConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride"></a>

```csharp
private void ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MediaServicesStreamCdnConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MediaServicesStreamCdnConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MediaServicesStreamCdnConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MediaServicesStreamCdnConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaServicesStreamCdnConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaServicesStreamCdnConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesStreamCdnConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput">ConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput">DistributionChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId">DistributionChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config"></a>

```csharp
public MediaServicesStreamCdnConfigConfigAOutputReference Config { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a>

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks"></a>

```csharp
public MediaServicesStreamCdnConfigLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts"></a>

```csharp
public MediaServicesStreamCdnConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput"></a>

```csharp
public MediaServicesStreamCdnConfigConfigA ConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DistributionChannelIdInput`<sup>Optional</sup> <a name="DistributionChannelIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput"></a>

```csharp
public string DistributionChannelIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput"></a>

```csharp
public object IsLockOverrideInput { get; }
```

- *Type:* object

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId"></a>

```csharp
public string DistributionChannelId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesStreamCdnConfigConfig <a name="MediaServicesStreamCdnConfigConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MediaServicesStreamCdnConfigConfigA Config,
    string DisplayName,
    string DistributionChannelId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsEnabled = null,
    object IsLockOverride = null,
    object Locks = null,
    MediaServicesStreamCdnConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId">DistributionChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config"></a>

```csharp
public MediaServicesStreamCdnConfigConfigA Config { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#config MediaServicesStreamCdnConfig#config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}.

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId"></a>

```csharp
public string DistributionChannelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#locks MediaServicesStreamCdnConfig#locks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts"></a>

```csharp
public MediaServicesStreamCdnConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#timeouts MediaServicesStreamCdnConfig#timeouts}

---

### MediaServicesStreamCdnConfigConfigA <a name="MediaServicesStreamCdnConfigConfigA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfigConfigA {
    string Type,
    string EdgeHostname = null,
    string EdgePathPrefix = null,
    string EdgeTokenKey = null,
    string EdgeTokenSalt = null,
    object IsEdgeTokenAuth = null,
    string OriginAuthSecretKeyA = null,
    string OriginAuthSecretKeyB = null,
    string OriginAuthSecretKeyNonceA = null,
    string OriginAuthSecretKeyNonceB = null,
    string OriginAuthSignEncryption = null,
    string OriginAuthSignType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname">EdgeHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix">EdgePathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey">EdgeTokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt">EdgeTokenSalt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth">IsEdgeTokenAuth</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA">OriginAuthSecretKeyA</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB">OriginAuthSecretKeyB</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA">OriginAuthSecretKeyNonceA</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB">OriginAuthSecretKeyNonceB</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption">OriginAuthSignEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType">OriginAuthSignType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `EdgeHostname`<sup>Optional</sup> <a name="EdgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname"></a>

```csharp
public string EdgeHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}.

---

##### `EdgePathPrefix`<sup>Optional</sup> <a name="EdgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix"></a>

```csharp
public string EdgePathPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}.

---

##### `EdgeTokenKey`<sup>Optional</sup> <a name="EdgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey"></a>

```csharp
public string EdgeTokenKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}.

---

##### `EdgeTokenSalt`<sup>Optional</sup> <a name="EdgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt"></a>

```csharp
public string EdgeTokenSalt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}.

---

##### `IsEdgeTokenAuth`<sup>Optional</sup> <a name="IsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth"></a>

```csharp
public object IsEdgeTokenAuth { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}.

---

##### `OriginAuthSecretKeyA`<sup>Optional</sup> <a name="OriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA"></a>

```csharp
public string OriginAuthSecretKeyA { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}.

---

##### `OriginAuthSecretKeyB`<sup>Optional</sup> <a name="OriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB"></a>

```csharp
public string OriginAuthSecretKeyB { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}.

---

##### `OriginAuthSecretKeyNonceA`<sup>Optional</sup> <a name="OriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA"></a>

```csharp
public string OriginAuthSecretKeyNonceA { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}.

---

##### `OriginAuthSecretKeyNonceB`<sup>Optional</sup> <a name="OriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB"></a>

```csharp
public string OriginAuthSecretKeyNonceB { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}.

---

##### `OriginAuthSignEncryption`<sup>Optional</sup> <a name="OriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption"></a>

```csharp
public string OriginAuthSignEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}.

---

##### `OriginAuthSignType`<sup>Optional</sup> <a name="OriginAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType"></a>

```csharp
public string OriginAuthSignType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}.

---

### MediaServicesStreamCdnConfigLocks <a name="MediaServicesStreamCdnConfigLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfigLocks {
    string CompartmentId,
    string Type,
    string Message = null,
    string RelatedResourceId = null,
    string TimeCreated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated">TimeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated"></a>

```csharp
public string TimeCreated { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}.

---

### MediaServicesStreamCdnConfigTimeouts <a name="MediaServicesStreamCdnConfigTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesStreamCdnConfigConfigAOutputReference <a name="MediaServicesStreamCdnConfigConfigAOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfigConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname">ResetEdgeHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix">ResetEdgePathPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey">ResetEdgeTokenKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt">ResetEdgeTokenSalt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth">ResetIsEdgeTokenAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA">ResetOriginAuthSecretKeyA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB">ResetOriginAuthSecretKeyB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA">ResetOriginAuthSecretKeyNonceA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB">ResetOriginAuthSecretKeyNonceB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption">ResetOriginAuthSignEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType">ResetOriginAuthSignType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEdgeHostname` <a name="ResetEdgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname"></a>

```csharp
private void ResetEdgeHostname()
```

##### `ResetEdgePathPrefix` <a name="ResetEdgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix"></a>

```csharp
private void ResetEdgePathPrefix()
```

##### `ResetEdgeTokenKey` <a name="ResetEdgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey"></a>

```csharp
private void ResetEdgeTokenKey()
```

##### `ResetEdgeTokenSalt` <a name="ResetEdgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt"></a>

```csharp
private void ResetEdgeTokenSalt()
```

##### `ResetIsEdgeTokenAuth` <a name="ResetIsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth"></a>

```csharp
private void ResetIsEdgeTokenAuth()
```

##### `ResetOriginAuthSecretKeyA` <a name="ResetOriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA"></a>

```csharp
private void ResetOriginAuthSecretKeyA()
```

##### `ResetOriginAuthSecretKeyB` <a name="ResetOriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB"></a>

```csharp
private void ResetOriginAuthSecretKeyB()
```

##### `ResetOriginAuthSecretKeyNonceA` <a name="ResetOriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA"></a>

```csharp
private void ResetOriginAuthSecretKeyNonceA()
```

##### `ResetOriginAuthSecretKeyNonceB` <a name="ResetOriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB"></a>

```csharp
private void ResetOriginAuthSecretKeyNonceB()
```

##### `ResetOriginAuthSignEncryption` <a name="ResetOriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption"></a>

```csharp
private void ResetOriginAuthSignEncryption()
```

##### `ResetOriginAuthSignType` <a name="ResetOriginAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType"></a>

```csharp
private void ResetOriginAuthSignType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput">EdgeHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput">EdgePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput">EdgeTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput">EdgeTokenSaltInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput">IsEdgeTokenAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput">OriginAuthSecretKeyAInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput">OriginAuthSecretKeyBInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput">OriginAuthSecretKeyNonceAInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput">OriginAuthSecretKeyNonceBInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput">OriginAuthSignEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput">OriginAuthSignTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname">EdgeHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix">EdgePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey">EdgeTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt">EdgeTokenSalt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth">IsEdgeTokenAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA">OriginAuthSecretKeyA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB">OriginAuthSecretKeyB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA">OriginAuthSecretKeyNonceA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB">OriginAuthSecretKeyNonceB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption">OriginAuthSignEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType">OriginAuthSignType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EdgeHostnameInput`<sup>Optional</sup> <a name="EdgeHostnameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput"></a>

```csharp
public string EdgeHostnameInput { get; }
```

- *Type:* string

---

##### `EdgePathPrefixInput`<sup>Optional</sup> <a name="EdgePathPrefixInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput"></a>

```csharp
public string EdgePathPrefixInput { get; }
```

- *Type:* string

---

##### `EdgeTokenKeyInput`<sup>Optional</sup> <a name="EdgeTokenKeyInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput"></a>

```csharp
public string EdgeTokenKeyInput { get; }
```

- *Type:* string

---

##### `EdgeTokenSaltInput`<sup>Optional</sup> <a name="EdgeTokenSaltInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput"></a>

```csharp
public string EdgeTokenSaltInput { get; }
```

- *Type:* string

---

##### `IsEdgeTokenAuthInput`<sup>Optional</sup> <a name="IsEdgeTokenAuthInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput"></a>

```csharp
public object IsEdgeTokenAuthInput { get; }
```

- *Type:* object

---

##### `OriginAuthSecretKeyAInput`<sup>Optional</sup> <a name="OriginAuthSecretKeyAInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput"></a>

```csharp
public string OriginAuthSecretKeyAInput { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyBInput`<sup>Optional</sup> <a name="OriginAuthSecretKeyBInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput"></a>

```csharp
public string OriginAuthSecretKeyBInput { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyNonceAInput`<sup>Optional</sup> <a name="OriginAuthSecretKeyNonceAInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput"></a>

```csharp
public string OriginAuthSecretKeyNonceAInput { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyNonceBInput`<sup>Optional</sup> <a name="OriginAuthSecretKeyNonceBInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput"></a>

```csharp
public string OriginAuthSecretKeyNonceBInput { get; }
```

- *Type:* string

---

##### `OriginAuthSignEncryptionInput`<sup>Optional</sup> <a name="OriginAuthSignEncryptionInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput"></a>

```csharp
public string OriginAuthSignEncryptionInput { get; }
```

- *Type:* string

---

##### `OriginAuthSignTypeInput`<sup>Optional</sup> <a name="OriginAuthSignTypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput"></a>

```csharp
public string OriginAuthSignTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `EdgeHostname`<sup>Required</sup> <a name="EdgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname"></a>

```csharp
public string EdgeHostname { get; }
```

- *Type:* string

---

##### `EdgePathPrefix`<sup>Required</sup> <a name="EdgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix"></a>

```csharp
public string EdgePathPrefix { get; }
```

- *Type:* string

---

##### `EdgeTokenKey`<sup>Required</sup> <a name="EdgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey"></a>

```csharp
public string EdgeTokenKey { get; }
```

- *Type:* string

---

##### `EdgeTokenSalt`<sup>Required</sup> <a name="EdgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt"></a>

```csharp
public string EdgeTokenSalt { get; }
```

- *Type:* string

---

##### `IsEdgeTokenAuth`<sup>Required</sup> <a name="IsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth"></a>

```csharp
public object IsEdgeTokenAuth { get; }
```

- *Type:* object

---

##### `OriginAuthSecretKeyA`<sup>Required</sup> <a name="OriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA"></a>

```csharp
public string OriginAuthSecretKeyA { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyB`<sup>Required</sup> <a name="OriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB"></a>

```csharp
public string OriginAuthSecretKeyB { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyNonceA`<sup>Required</sup> <a name="OriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA"></a>

```csharp
public string OriginAuthSecretKeyNonceA { get; }
```

- *Type:* string

---

##### `OriginAuthSecretKeyNonceB`<sup>Required</sup> <a name="OriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB"></a>

```csharp
public string OriginAuthSecretKeyNonceB { get; }
```

- *Type:* string

---

##### `OriginAuthSignEncryption`<sup>Required</sup> <a name="OriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption"></a>

```csharp
public string OriginAuthSignEncryption { get; }
```

- *Type:* string

---

##### `OriginAuthSignType`<sup>Required</sup> <a name="OriginAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType"></a>

```csharp
public string OriginAuthSignType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue"></a>

```csharp
public MediaServicesStreamCdnConfigConfigA InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---


### MediaServicesStreamCdnConfigLocksList <a name="MediaServicesStreamCdnConfigLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfigLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get"></a>

```csharp
private MediaServicesStreamCdnConfigLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesStreamCdnConfigLocksOutputReference <a name="MediaServicesStreamCdnConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfigLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId"></a>

```csharp
private void ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated"></a>

```csharp
private void ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput"></a>

```csharp
public string RelatedResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput"></a>

```csharp
public string TimeCreatedInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesStreamCdnConfigTimeoutsOutputReference <a name="MediaServicesStreamCdnConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MediaServicesStreamCdnConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


