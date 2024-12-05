# `databaseExadataInfrastructureCompute` Submodule <a name="`databaseExadataInfrastructureCompute` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadataInfrastructureCompute <a name="DatabaseExadataInfrastructureCompute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute oci_database_exadata_infrastructure_compute}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureCompute(Construct Scope, string Id, DatabaseExadataInfrastructureComputeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig">DatabaseExadataInfrastructureComputeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig">DatabaseExadataInfrastructureComputeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetActivationFile">ResetActivationFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetAdditionalComputeCountComputeManagedResource">ResetAdditionalComputeCountComputeManagedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetAdditionalComputeSystemModelComputeManagedResource">ResetAdditionalComputeSystemModelComputeManagedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseExadataInfrastructureComputeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a>

---

##### `ResetActivationFile` <a name="ResetActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetActivationFile"></a>

```csharp
private void ResetActivationFile()
```

##### `ResetAdditionalComputeCountComputeManagedResource` <a name="ResetAdditionalComputeCountComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetAdditionalComputeCountComputeManagedResource"></a>

```csharp
private void ResetAdditionalComputeCountComputeManagedResource()
```

##### `ResetAdditionalComputeSystemModelComputeManagedResource` <a name="ResetAdditionalComputeSystemModelComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetAdditionalComputeSystemModelComputeManagedResource"></a>

```csharp
private void ResetAdditionalComputeSystemModelComputeManagedResource()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadataInfrastructureCompute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadataInfrastructureCompute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadataInfrastructureCompute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadataInfrastructureCompute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadataInfrastructureCompute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseExadataInfrastructureCompute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExadataInfrastructureCompute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExadataInfrastructureCompute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadataInfrastructureCompute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCount">AdditionalComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModel">AdditionalComputeSystemModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.adminNetworkCidr">AdminNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cloudControlPlaneServer1">CloudControlPlaneServer1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cloudControlPlaneServer2">CloudControlPlaneServer2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.contacts">Contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList">DatabaseExadataInfrastructureComputeContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.corporateProxy">CorporateProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cpusEnabled">CpusEnabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.createAsync">CreateAsync</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.csiNumber">CsiNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dbServerVersion">DbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.infiniBandNetworkCidr">InfiniBandNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.isCpsOfflineReportEnabled">IsCpsOfflineReportEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maintenanceSloStatus">MaintenanceSloStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList">DatabaseExadataInfrastructureComputeMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxCpuCount">MaxCpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxDataStorageInTbs">MaxDataStorageInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxDbNodeStorageInGbs">MaxDbNodeStorageInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxMemoryInGbs">MaxMemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.monthlyDbServerVersion">MonthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.netmask">Netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.ntpServer">NtpServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.storageCount">StorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.storageServerVersion">StorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference">DatabaseExadataInfrastructureComputeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activationFileInput">ActivationFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCountComputeManagedResourceInput">AdditionalComputeCountComputeManagedResourceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModelComputeManagedResourceInput">AdditionalComputeSystemModelComputeManagedResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.exadataInfrastructureIdInput">ExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activationFile">ActivationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCountComputeManagedResource">AdditionalComputeCountComputeManagedResource</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModelComputeManagedResource">AdditionalComputeSystemModelComputeManagedResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activatedStorageCount"></a>

```csharp
public double ActivatedStorageCount { get; }
```

- *Type:* double

---

##### `AdditionalComputeCount`<sup>Required</sup> <a name="AdditionalComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCount"></a>

```csharp
public double AdditionalComputeCount { get; }
```

- *Type:* double

---

##### `AdditionalComputeSystemModel`<sup>Required</sup> <a name="AdditionalComputeSystemModel" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModel"></a>

```csharp
public string AdditionalComputeSystemModel { get; }
```

- *Type:* string

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalStorageCount"></a>

```csharp
public double AdditionalStorageCount { get; }
```

- *Type:* double

---

##### `AdminNetworkCidr`<sup>Required</sup> <a name="AdminNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.adminNetworkCidr"></a>

```csharp
public string AdminNetworkCidr { get; }
```

- *Type:* string

---

##### `CloudControlPlaneServer1`<sup>Required</sup> <a name="CloudControlPlaneServer1" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cloudControlPlaneServer1"></a>

```csharp
public string CloudControlPlaneServer1 { get; }
```

- *Type:* string

---

##### `CloudControlPlaneServer2`<sup>Required</sup> <a name="CloudControlPlaneServer2" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cloudControlPlaneServer2"></a>

```csharp
public string CloudControlPlaneServer2 { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `Contacts`<sup>Required</sup> <a name="Contacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.contacts"></a>

```csharp
public DatabaseExadataInfrastructureComputeContactsList Contacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList">DatabaseExadataInfrastructureComputeContactsList</a>

---

##### `CorporateProxy`<sup>Required</sup> <a name="CorporateProxy" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.corporateProxy"></a>

```csharp
public string CorporateProxy { get; }
```

- *Type:* string

---

##### `CpusEnabled`<sup>Required</sup> <a name="CpusEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.cpusEnabled"></a>

```csharp
public double CpusEnabled { get; }
```

- *Type:* double

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.createAsync"></a>

```csharp
public IResolvable CreateAsync { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CsiNumber`<sup>Required</sup> <a name="CsiNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.csiNumber"></a>

```csharp
public string CsiNumber { get; }
```

- *Type:* string

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dbServerVersion"></a>

```csharp
public string DbServerVersion { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; }
```

- *Type:* string[]

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `InfiniBandNetworkCidr`<sup>Required</sup> <a name="InfiniBandNetworkCidr" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.infiniBandNetworkCidr"></a>

```csharp
public string InfiniBandNetworkCidr { get; }
```

- *Type:* string

---

##### `IsCpsOfflineReportEnabled`<sup>Required</sup> <a name="IsCpsOfflineReportEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.isCpsOfflineReportEnabled"></a>

```csharp
public IResolvable IsCpsOfflineReportEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceSloStatus`<sup>Required</sup> <a name="MaintenanceSloStatus" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maintenanceSloStatus"></a>

```csharp
public string MaintenanceSloStatus { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maintenanceWindow"></a>

```csharp
public DatabaseExadataInfrastructureComputeMaintenanceWindowList MaintenanceWindow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList">DatabaseExadataInfrastructureComputeMaintenanceWindowList</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxCpuCount"></a>

```csharp
public double MaxCpuCount { get; }
```

- *Type:* double

---

##### `MaxDataStorageInTbs`<sup>Required</sup> <a name="MaxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxDataStorageInTbs"></a>

```csharp
public double MaxDataStorageInTbs { get; }
```

- *Type:* double

---

##### `MaxDbNodeStorageInGbs`<sup>Required</sup> <a name="MaxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxDbNodeStorageInGbs"></a>

```csharp
public double MaxDbNodeStorageInGbs { get; }
```

- *Type:* double

---

##### `MaxMemoryInGbs`<sup>Required</sup> <a name="MaxMemoryInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.maxMemoryInGbs"></a>

```csharp
public double MaxMemoryInGbs { get; }
```

- *Type:* double

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `MonthlyDbServerVersion`<sup>Required</sup> <a name="MonthlyDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.monthlyDbServerVersion"></a>

```csharp
public string MonthlyDbServerVersion { get; }
```

- *Type:* string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.netmask"></a>

```csharp
public string Netmask { get; }
```

- *Type:* string

---

##### `NtpServer`<sup>Required</sup> <a name="NtpServer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.ntpServer"></a>

```csharp
public string[] NtpServer { get; }
```

- *Type:* string[]

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.storageCount"></a>

```csharp
public double StorageCount { get; }
```

- *Type:* double

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.storageServerVersion"></a>

```csharp
public string StorageServerVersion { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeouts"></a>

```csharp
public DatabaseExadataInfrastructureComputeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference">DatabaseExadataInfrastructureComputeTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `ActivationFileInput`<sup>Optional</sup> <a name="ActivationFileInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activationFileInput"></a>

```csharp
public string ActivationFileInput { get; }
```

- *Type:* string

---

##### `AdditionalComputeCountComputeManagedResourceInput`<sup>Optional</sup> <a name="AdditionalComputeCountComputeManagedResourceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCountComputeManagedResourceInput"></a>

```csharp
public double AdditionalComputeCountComputeManagedResourceInput { get; }
```

- *Type:* double

---

##### `AdditionalComputeSystemModelComputeManagedResourceInput`<sup>Optional</sup> <a name="AdditionalComputeSystemModelComputeManagedResourceInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModelComputeManagedResourceInput"></a>

```csharp
public string AdditionalComputeSystemModelComputeManagedResourceInput { get; }
```

- *Type:* string

---

##### `ExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.exadataInfrastructureIdInput"></a>

```csharp
public string ExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ActivationFile`<sup>Required</sup> <a name="ActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.activationFile"></a>

```csharp
public string ActivationFile { get; }
```

- *Type:* string

---

##### `AdditionalComputeCountComputeManagedResource`<sup>Required</sup> <a name="AdditionalComputeCountComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeCountComputeManagedResource"></a>

```csharp
public double AdditionalComputeCountComputeManagedResource { get; }
```

- *Type:* double

---

##### `AdditionalComputeSystemModelComputeManagedResource`<sup>Required</sup> <a name="AdditionalComputeSystemModelComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.additionalComputeSystemModelComputeManagedResource"></a>

```csharp
public string AdditionalComputeSystemModelComputeManagedResource { get; }
```

- *Type:* string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureCompute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadataInfrastructureComputeConfig <a name="DatabaseExadataInfrastructureComputeConfig" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExadataInfrastructureId,
    string ActivationFile = null,
    double AdditionalComputeCountComputeManagedResource = null,
    string AdditionalComputeSystemModelComputeManagedResource = null,
    string Id = null,
    DatabaseExadataInfrastructureComputeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#exadata_infrastructure_id DatabaseExadataInfrastructureCompute#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.activationFile">ActivationFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#activation_file DatabaseExadataInfrastructureCompute#activation_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.additionalComputeCountComputeManagedResource">AdditionalComputeCountComputeManagedResource</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_count_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_count_compute_managed_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.additionalComputeSystemModelComputeManagedResource">AdditionalComputeSystemModelComputeManagedResource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_system_model_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_system_model_compute_managed_resource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#id DatabaseExadataInfrastructureCompute#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#exadata_infrastructure_id DatabaseExadataInfrastructureCompute#exadata_infrastructure_id}.

---

##### `ActivationFile`<sup>Optional</sup> <a name="ActivationFile" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.activationFile"></a>

```csharp
public string ActivationFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#activation_file DatabaseExadataInfrastructureCompute#activation_file}.

---

##### `AdditionalComputeCountComputeManagedResource`<sup>Optional</sup> <a name="AdditionalComputeCountComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.additionalComputeCountComputeManagedResource"></a>

```csharp
public double AdditionalComputeCountComputeManagedResource { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_count_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_count_compute_managed_resource}.

---

##### `AdditionalComputeSystemModelComputeManagedResource`<sup>Optional</sup> <a name="AdditionalComputeSystemModelComputeManagedResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.additionalComputeSystemModelComputeManagedResource"></a>

```csharp
public string AdditionalComputeSystemModelComputeManagedResource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#additional_compute_system_model_compute_managed_resource DatabaseExadataInfrastructureCompute#additional_compute_system_model_compute_managed_resource}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#id DatabaseExadataInfrastructureCompute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeConfig.property.timeouts"></a>

```csharp
public DatabaseExadataInfrastructureComputeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts">DatabaseExadataInfrastructureComputeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#timeouts DatabaseExadataInfrastructureCompute#timeouts}

---

### DatabaseExadataInfrastructureComputeContacts <a name="DatabaseExadataInfrastructureComputeContacts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeContacts {

};
```


### DatabaseExadataInfrastructureComputeMaintenanceWindow <a name="DatabaseExadataInfrastructureComputeMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindow {

};
```


### DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek {

};
```


### DatabaseExadataInfrastructureComputeMaintenanceWindowMonths <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindowMonths {

};
```


### DatabaseExadataInfrastructureComputeTimeouts <a name="DatabaseExadataInfrastructureComputeTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#create DatabaseExadataInfrastructureCompute#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#delete DatabaseExadataInfrastructureCompute#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#update DatabaseExadataInfrastructureCompute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#create DatabaseExadataInfrastructureCompute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#delete DatabaseExadataInfrastructureCompute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadata_infrastructure_compute#update DatabaseExadataInfrastructureCompute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadataInfrastructureComputeContactsList <a name="DatabaseExadataInfrastructureComputeContactsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.get"></a>

```csharp
private DatabaseExadataInfrastructureComputeContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseExadataInfrastructureComputeContactsOutputReference <a name="DatabaseExadataInfrastructureComputeContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.isContactMosValidated">IsContactMosValidated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.isPrimary">IsPrimary</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContacts">DatabaseExadataInfrastructureComputeContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `IsContactMosValidated`<sup>Required</sup> <a name="IsContactMosValidated" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.isContactMosValidated"></a>

```csharp
public IResolvable IsContactMosValidated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.isPrimary"></a>

```csharp
public IResolvable IsPrimary { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContactsOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadataInfrastructureComputeContacts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeContacts">DatabaseExadataInfrastructureComputeContacts</a>

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.get"></a>

```csharp
private DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek">DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeek</a>

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowList <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.get"></a>

```csharp
private DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.get"></a>

```csharp
private DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths">DatabaseExadataInfrastructureComputeMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadataInfrastructureComputeMaintenanceWindowMonths InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonths">DatabaseExadataInfrastructureComputeMaintenanceWindowMonths</a>

---


### DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference <a name="DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList">DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindow">DatabaseExadataInfrastructureComputeMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList DaysOfWeek { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList">DatabaseExadataInfrastructureComputeMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.months"></a>

```csharp
public DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList Months { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList">DatabaseExadataInfrastructureComputeMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadataInfrastructureComputeMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeMaintenanceWindow">DatabaseExadataInfrastructureComputeMaintenanceWindow</a>

---


### DatabaseExadataInfrastructureComputeTimeoutsOutputReference <a name="DatabaseExadataInfrastructureComputeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadataInfrastructureComputeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadataInfrastructureCompute.DatabaseExadataInfrastructureComputeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



