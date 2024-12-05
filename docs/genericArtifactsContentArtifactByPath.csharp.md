# `genericArtifactsContentArtifactByPath` Submodule <a name="`genericArtifactsContentArtifactByPath` Submodule" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenericArtifactsContentArtifactByPath <a name="GenericArtifactsContentArtifactByPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path oci_generic_artifacts_content_artifact_by_path}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenericArtifactsContentArtifactByPath(Construct Scope, string Id, GenericArtifactsContentArtifactByPathConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig">GenericArtifactsContentArtifactByPathConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig">GenericArtifactsContentArtifactByPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts"></a>

```csharp
private void PutTimeouts(GenericArtifactsContentArtifactByPathTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a>

---

##### `ResetContent` <a name="ResetContent" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GenericArtifactsContentArtifactByPath.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GenericArtifactsContentArtifactByPath.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GenericArtifactsContentArtifactByPath.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GenericArtifactsContentArtifactByPath.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenericArtifactsContentArtifactByPath to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenericArtifactsContentArtifactByPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GenericArtifactsContentArtifactByPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sizeInBytes">SizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference">GenericArtifactsContentArtifactByPathTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPathInput">ArtifactPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPath">ArtifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sizeInBytes"></a>

```csharp
public string SizeInBytes { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeouts"></a>

```csharp
public GenericArtifactsContentArtifactByPathTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference">GenericArtifactsContentArtifactByPathTimeoutsOutputReference</a>

---

##### `ArtifactPathInput`<sup>Optional</sup> <a name="ArtifactPathInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPathInput"></a>

```csharp
public string ArtifactPathInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.artifactPath"></a>

```csharp
public string ArtifactPath { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPath.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenericArtifactsContentArtifactByPathConfig <a name="GenericArtifactsContentArtifactByPathConfig" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenericArtifactsContentArtifactByPathConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ArtifactPath,
    string RepositoryId,
    string Version,
    string Content = null,
    string Id = null,
    string Source = null,
    GenericArtifactsContentArtifactByPathTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.artifactPath">ArtifactPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#artifact_path GenericArtifactsContentArtifactByPath#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#repository_id GenericArtifactsContentArtifactByPath#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#version GenericArtifactsContentArtifactByPath#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#content GenericArtifactsContentArtifactByPath#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#id GenericArtifactsContentArtifactByPath#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#source GenericArtifactsContentArtifactByPath#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.artifactPath"></a>

```csharp
public string ArtifactPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#artifact_path GenericArtifactsContentArtifactByPath#artifact_path}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#repository_id GenericArtifactsContentArtifactByPath#repository_id}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#version GenericArtifactsContentArtifactByPath#version}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#content GenericArtifactsContentArtifactByPath#content}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#id GenericArtifactsContentArtifactByPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#source GenericArtifactsContentArtifactByPath#source}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathConfig.property.timeouts"></a>

```csharp
public GenericArtifactsContentArtifactByPathTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts">GenericArtifactsContentArtifactByPathTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#timeouts GenericArtifactsContentArtifactByPath#timeouts}

---

### GenericArtifactsContentArtifactByPathTimeouts <a name="GenericArtifactsContentArtifactByPathTimeouts" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenericArtifactsContentArtifactByPathTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#create GenericArtifactsContentArtifactByPath#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#delete GenericArtifactsContentArtifactByPath#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#update GenericArtifactsContentArtifactByPath#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#create GenericArtifactsContentArtifactByPath#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#delete GenericArtifactsContentArtifactByPath#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generic_artifacts_content_artifact_by_path#update GenericArtifactsContentArtifactByPath#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenericArtifactsContentArtifactByPathTimeoutsOutputReference <a name="GenericArtifactsContentArtifactByPathTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GenericArtifactsContentArtifactByPathTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.genericArtifactsContentArtifactByPath.GenericArtifactsContentArtifactByPathTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



