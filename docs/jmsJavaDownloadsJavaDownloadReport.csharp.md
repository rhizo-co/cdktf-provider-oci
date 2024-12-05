# `jmsJavaDownloadsJavaDownloadReport` Submodule <a name="`jmsJavaDownloadsJavaDownloadReport` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaDownloadReport <a name="JmsJavaDownloadsJavaDownloadReport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report oci_jms_java_downloads_java_download_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadReport(Construct Scope, string Id, JmsJavaDownloadsJavaDownloadReportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig">JmsJavaDownloadsJavaDownloadReportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig">JmsJavaDownloadsJavaDownloadReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.putTimeouts"></a>

```csharp
private void PutTimeouts(JmsJavaDownloadsJavaDownloadReportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeEnd"></a>

```csharp
private void ResetTimeEnd()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.resetTimeStart"></a>

```csharp
private void ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsJavaDownloadsJavaDownloadReport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsJavaDownloadsJavaDownloadReport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsJavaDownloadsJavaDownloadReport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

JmsJavaDownloadsJavaDownloadReport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaDownloadReport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the JmsJavaDownloadsJavaDownloadReport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing JmsJavaDownloadsJavaDownloadReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaDownloadReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.checksumType">ChecksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.checksumValue">ChecksumValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.createdBy">CreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList">JmsJavaDownloadsJavaDownloadReportCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.fileSizeInBytes">FileSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.sortBy">SortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeEndInput">TimeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeStartInput">TimeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ChecksumType`<sup>Required</sup> <a name="ChecksumType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.checksumType"></a>

```csharp
public string ChecksumType { get; }
```

- *Type:* string

---

##### `ChecksumValue`<sup>Required</sup> <a name="ChecksumValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.checksumValue"></a>

```csharp
public string ChecksumValue { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.createdBy"></a>

```csharp
public JmsJavaDownloadsJavaDownloadReportCreatedByList CreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList">JmsJavaDownloadsJavaDownloadReportCreatedByList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FileSizeInBytes`<sup>Required</sup> <a name="FileSizeInBytes" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.fileSizeInBytes"></a>

```csharp
public string FileSizeInBytes { get; }
```

- *Type:* string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.sortBy"></a>

```csharp
public string SortBy { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeouts"></a>

```csharp
public JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference">JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeEndInput"></a>

```csharp
public string TimeEndInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeStartInput"></a>

```csharp
public string TimeStartInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaDownloadReportConfig <a name="JmsJavaDownloadsJavaDownloadReportConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadReportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Format,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string TimeEnd = null,
    JmsJavaDownloadsJavaDownloadReportTimeouts Timeouts = null,
    string TimeStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#compartment_id JmsJavaDownloadsJavaDownloadReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#format JmsJavaDownloadsJavaDownloadReport#format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#defined_tags JmsJavaDownloadsJavaDownloadReport#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#freeform_tags JmsJavaDownloadsJavaDownloadReport#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#id JmsJavaDownloadsJavaDownloadReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeEnd">TimeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#time_end JmsJavaDownloadsJavaDownloadReport#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeStart">TimeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#time_start JmsJavaDownloadsJavaDownloadReport#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#compartment_id JmsJavaDownloadsJavaDownloadReport#compartment_id}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#format JmsJavaDownloadsJavaDownloadReport#format}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#defined_tags JmsJavaDownloadsJavaDownloadReport#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#freeform_tags JmsJavaDownloadsJavaDownloadReport#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#id JmsJavaDownloadsJavaDownloadReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeEnd"></a>

```csharp
public string TimeEnd { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#time_end JmsJavaDownloadsJavaDownloadReport#time_end}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeouts"></a>

```csharp
public JmsJavaDownloadsJavaDownloadReportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts">JmsJavaDownloadsJavaDownloadReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#timeouts JmsJavaDownloadsJavaDownloadReport#timeouts}

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportConfig.property.timeStart"></a>

```csharp
public string TimeStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#time_start JmsJavaDownloadsJavaDownloadReport#time_start}.

---

### JmsJavaDownloadsJavaDownloadReportCreatedBy <a name="JmsJavaDownloadsJavaDownloadReportCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadReportCreatedBy {

};
```


### JmsJavaDownloadsJavaDownloadReportTimeouts <a name="JmsJavaDownloadsJavaDownloadReportTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadReportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#create JmsJavaDownloadsJavaDownloadReport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#delete JmsJavaDownloadsJavaDownloadReport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#update JmsJavaDownloadsJavaDownloadReport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#create JmsJavaDownloadsJavaDownloadReport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#delete JmsJavaDownloadsJavaDownloadReport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_download_report#update JmsJavaDownloadsJavaDownloadReport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaDownloadReportCreatedByList <a name="JmsJavaDownloadsJavaDownloadReportCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadReportCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.get"></a>

```csharp
private JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference <a name="JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy">JmsJavaDownloadsJavaDownloadReportCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedByOutputReference.property.internalValue"></a>

```csharp
public JmsJavaDownloadsJavaDownloadReportCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportCreatedBy">JmsJavaDownloadsJavaDownloadReportCreatedBy</a>

---


### JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference <a name="JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaDownloadReport.JmsJavaDownloadsJavaDownloadReportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



