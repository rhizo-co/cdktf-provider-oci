# `logAnalyticsLogAnalyticsImportCustomContent` Submodule <a name="`logAnalyticsLogAnalyticsImportCustomContent` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsImportCustomContent <a name="LogAnalyticsLogAnalyticsImportCustomContent" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content oci_log_analytics_log_analytics_import_custom_content}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsImportCustomContent(Construct Scope, string Id, LogAnalyticsLogAnalyticsImportCustomContentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig">LogAnalyticsLogAnalyticsImportCustomContentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig">LogAnalyticsLogAnalyticsImportCustomContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetExpect">ResetExpect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetIsOverwrite">ResetIsOverwrite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts"></a>

```csharp
private void PutTimeouts(LogAnalyticsLogAnalyticsImportCustomContentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a>

---

##### `ResetExpect` <a name="ResetExpect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetExpect"></a>

```csharp
private void ResetExpect()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsOverwrite` <a name="ResetIsOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetIsOverwrite"></a>

```csharp
private void ResetIsOverwrite()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsImportCustomContent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsImportCustomContent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsImportCustomContent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsImportCustomContent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsImportCustomContent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsImportCustomContent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsLogAnalyticsImportCustomContent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsLogAnalyticsImportCustomContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsImportCustomContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.changeList">ChangeList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList">LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.contentName">ContentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fieldNames">FieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.parserNames">ParserNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.sourceNames">SourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference">LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expectInput">ExpectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFileInput">ImportCustomContentFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwriteInput">IsOverwriteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expect">Expect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFile">ImportCustomContentFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwrite">IsOverwrite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ChangeList`<sup>Required</sup> <a name="ChangeList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.changeList"></a>

```csharp
public LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList ChangeList { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList">LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList</a>

---

##### `ContentName`<sup>Required</sup> <a name="ContentName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.contentName"></a>

```csharp
public string ContentName { get; }
```

- *Type:* string

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fieldNames"></a>

```csharp
public string[] FieldNames { get; }
```

- *Type:* string[]

---

##### `ParserNames`<sup>Required</sup> <a name="ParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.parserNames"></a>

```csharp
public string[] ParserNames { get; }
```

- *Type:* string[]

---

##### `SourceNames`<sup>Required</sup> <a name="SourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.sourceNames"></a>

```csharp
public string[] SourceNames { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeouts"></a>

```csharp
public LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference">LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference</a>

---

##### `ExpectInput`<sup>Optional</sup> <a name="ExpectInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expectInput"></a>

```csharp
public string ExpectInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportCustomContentFileInput`<sup>Optional</sup> <a name="ImportCustomContentFileInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFileInput"></a>

```csharp
public string ImportCustomContentFileInput { get; }
```

- *Type:* string

---

##### `IsOverwriteInput`<sup>Optional</sup> <a name="IsOverwriteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwriteInput"></a>

```csharp
public object IsOverwriteInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Expect`<sup>Required</sup> <a name="Expect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expect"></a>

```csharp
public string Expect { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportCustomContentFile`<sup>Required</sup> <a name="ImportCustomContentFile" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFile"></a>

```csharp
public string ImportCustomContentFile { get; }
```

- *Type:* string

---

##### `IsOverwrite`<sup>Required</sup> <a name="IsOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwrite"></a>

```csharp
public object IsOverwrite { get; }
```

- *Type:* object

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct {

};
```


### LogAnalyticsLogAnalyticsImportCustomContentConfig <a name="LogAnalyticsLogAnalyticsImportCustomContentConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsImportCustomContentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ImportCustomContentFile,
    string Namespace,
    string Expect = null,
    string Id = null,
    object IsOverwrite = null,
    LogAnalyticsLogAnalyticsImportCustomContentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.importCustomContentFile">ImportCustomContentFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import_custom_content_file LogAnalyticsLogAnalyticsImportCustomContent#import_custom_content_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#namespace LogAnalyticsLogAnalyticsImportCustomContent#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.expect">Expect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#expect LogAnalyticsLogAnalyticsImportCustomContent#expect}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#id LogAnalyticsLogAnalyticsImportCustomContent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.isOverwrite">IsOverwrite</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#is_overwrite LogAnalyticsLogAnalyticsImportCustomContent#is_overwrite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ImportCustomContentFile`<sup>Required</sup> <a name="ImportCustomContentFile" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.importCustomContentFile"></a>

```csharp
public string ImportCustomContentFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import_custom_content_file LogAnalyticsLogAnalyticsImportCustomContent#import_custom_content_file}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#namespace LogAnalyticsLogAnalyticsImportCustomContent#namespace}.

---

##### `Expect`<sup>Optional</sup> <a name="Expect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.expect"></a>

```csharp
public string Expect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#expect LogAnalyticsLogAnalyticsImportCustomContent#expect}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#id LogAnalyticsLogAnalyticsImportCustomContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOverwrite`<sup>Optional</sup> <a name="IsOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.isOverwrite"></a>

```csharp
public object IsOverwrite { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#is_overwrite LogAnalyticsLogAnalyticsImportCustomContent#is_overwrite}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.timeouts"></a>

```csharp
public LogAnalyticsLogAnalyticsImportCustomContentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#timeouts LogAnalyticsLogAnalyticsImportCustomContent#timeouts}

---

### LogAnalyticsLogAnalyticsImportCustomContentTimeouts <a name="LogAnalyticsLogAnalyticsImportCustomContentTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsImportCustomContentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#create LogAnalyticsLogAnalyticsImportCustomContent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#delete LogAnalyticsLogAnalyticsImportCustomContent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#update LogAnalyticsLogAnalyticsImportCustomContent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#create LogAnalyticsLogAnalyticsImportCustomContent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#delete LogAnalyticsLogAnalyticsImportCustomContent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#update LogAnalyticsLogAnalyticsImportCustomContent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get"></a>

```csharp
private LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictFieldDisplayNames">ConflictFieldDisplayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictParserNames">ConflictParserNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictSourceNames">ConflictSourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdFieldDisplayNames">CreatedFieldDisplayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdParserNames">CreatedParserNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdSourceNames">CreatedSourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedFieldDisplayNames">UpdatedFieldDisplayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedParserNames">UpdatedParserNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedSourceNames">UpdatedSourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct">LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictFieldDisplayNames`<sup>Required</sup> <a name="ConflictFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictFieldDisplayNames"></a>

```csharp
public string[] ConflictFieldDisplayNames { get; }
```

- *Type:* string[]

---

##### `ConflictParserNames`<sup>Required</sup> <a name="ConflictParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictParserNames"></a>

```csharp
public string[] ConflictParserNames { get; }
```

- *Type:* string[]

---

##### `ConflictSourceNames`<sup>Required</sup> <a name="ConflictSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictSourceNames"></a>

```csharp
public string[] ConflictSourceNames { get; }
```

- *Type:* string[]

---

##### `CreatedFieldDisplayNames`<sup>Required</sup> <a name="CreatedFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdFieldDisplayNames"></a>

```csharp
public string[] CreatedFieldDisplayNames { get; }
```

- *Type:* string[]

---

##### `CreatedParserNames`<sup>Required</sup> <a name="CreatedParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdParserNames"></a>

```csharp
public string[] CreatedParserNames { get; }
```

- *Type:* string[]

---

##### `CreatedSourceNames`<sup>Required</sup> <a name="CreatedSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdSourceNames"></a>

```csharp
public string[] CreatedSourceNames { get; }
```

- *Type:* string[]

---

##### `UpdatedFieldDisplayNames`<sup>Required</sup> <a name="UpdatedFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedFieldDisplayNames"></a>

```csharp
public string[] UpdatedFieldDisplayNames { get; }
```

- *Type:* string[]

---

##### `UpdatedParserNames`<sup>Required</sup> <a name="UpdatedParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedParserNames"></a>

```csharp
public string[] UpdatedParserNames { get; }
```

- *Type:* string[]

---

##### `UpdatedSourceNames`<sup>Required</sup> <a name="UpdatedSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedSourceNames"></a>

```csharp
public string[] UpdatedSourceNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.internalValue"></a>

```csharp
public LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct">LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct</a>

---


### LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



