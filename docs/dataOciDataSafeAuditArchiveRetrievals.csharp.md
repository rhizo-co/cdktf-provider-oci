# `dataOciDataSafeAuditArchiveRetrievals` Submodule <a name="`dataOciDataSafeAuditArchiveRetrievals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditArchiveRetrievals <a name="DataOciDataSafeAuditArchiveRetrievals" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals oci_data_safe_audit_archive_retrievals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievals(Construct Scope, string Id, DataOciDataSafeAuditArchiveRetrievalsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig">DataOciDataSafeAuditArchiveRetrievalsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig">DataOciDataSafeAuditArchiveRetrievalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAuditArchiveRetrievalId">ResetAuditArchiveRetrievalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTimeOfExpiry">ResetTimeOfExpiry</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetAuditArchiveRetrievalId` <a name="ResetAuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetAuditArchiveRetrievalId"></a>

```csharp
private void ResetAuditArchiveRetrievalId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeOfExpiry` <a name="ResetTimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.resetTimeOfExpiry"></a>

```csharp
private void ResetTimeOfExpiry()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrievals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditArchiveRetrievals.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditArchiveRetrievals.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditArchiveRetrievals.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditArchiveRetrievals.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrievals resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditArchiveRetrievals to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditArchiveRetrievals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditArchiveRetrievals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalCollection">AuditArchiveRetrievalCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList">DataOciDataSafeAuditArchiveRetrievalsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalIdInput">AuditArchiveRetrievalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiryInput">TimeOfExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalId">AuditArchiveRetrievalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiry">TimeOfExpiry</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuditArchiveRetrievalCollection`<sup>Required</sup> <a name="AuditArchiveRetrievalCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalCollection"></a>

```csharp
public DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList AuditArchiveRetrievalCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filter"></a>

```csharp
public DataOciDataSafeAuditArchiveRetrievalsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList">DataOciDataSafeAuditArchiveRetrievalsFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `AuditArchiveRetrievalIdInput`<sup>Optional</sup> <a name="AuditArchiveRetrievalIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalIdInput"></a>

```csharp
public string AuditArchiveRetrievalIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeOfExpiryInput`<sup>Optional</sup> <a name="TimeOfExpiryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiryInput"></a>

```csharp
public string TimeOfExpiryInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `AuditArchiveRetrievalId`<sup>Required</sup> <a name="AuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.auditArchiveRetrievalId"></a>

```csharp
public string AuditArchiveRetrievalId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeOfExpiry`<sup>Required</sup> <a name="TimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.timeOfExpiry"></a>

```csharp
public string TimeOfExpiry { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievals.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection {

};
```


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems {

};
```


### DataOciDataSafeAuditArchiveRetrievalsConfig <a name="DataOciDataSafeAuditArchiveRetrievalsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AccessLevel = null,
    string AuditArchiveRetrievalId = null,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null,
    string TargetId = null,
    string TimeOfExpiry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.auditArchiveRetrievalId">AuditArchiveRetrievalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.timeOfExpiry">TimeOfExpiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id DataOciDataSafeAuditArchiveRetrievals#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#access_level DataOciDataSafeAuditArchiveRetrievals#access_level}.

---

##### `AuditArchiveRetrievalId`<sup>Optional</sup> <a name="AuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.auditArchiveRetrievalId"></a>

```csharp
public string AuditArchiveRetrievalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrievals#audit_archive_retrieval_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#compartment_id_in_subtree DataOciDataSafeAuditArchiveRetrievals#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#display_name DataOciDataSafeAuditArchiveRetrievals#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#filter DataOciDataSafeAuditArchiveRetrievals#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#id DataOciDataSafeAuditArchiveRetrievals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#state DataOciDataSafeAuditArchiveRetrievals#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#target_id DataOciDataSafeAuditArchiveRetrievals#target_id}.

---

##### `TimeOfExpiry`<sup>Optional</sup> <a name="TimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsConfig.property.timeOfExpiry"></a>

```csharp
public string TimeOfExpiry { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#time_of_expiry DataOciDataSafeAuditArchiveRetrievals#time_of_expiry}.

---

### DataOciDataSafeAuditArchiveRetrievalsFilter <a name="DataOciDataSafeAuditArchiveRetrievalsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#name DataOciDataSafeAuditArchiveRetrievals#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#values DataOciDataSafeAuditArchiveRetrievals#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#regex DataOciDataSafeAuditArchiveRetrievals#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#name DataOciDataSafeAuditArchiveRetrievals#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#values DataOciDataSafeAuditArchiveRetrievals#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrievals#regex DataOciDataSafeAuditArchiveRetrievals#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.auditEventCount">AuditEventCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.errorInfo">ErrorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeCompleted">TimeCompleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeOfExpiry">TimeOfExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeRequested">TimeRequested</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditEventCount`<sup>Required</sup> <a name="AuditEventCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.auditEventCount"></a>

```csharp
public string AuditEventCount { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.errorInfo"></a>

```csharp
public string ErrorInfo { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCompleted`<sup>Required</sup> <a name="TimeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeCompleted"></a>

```csharp
public string TimeCompleted { get; }
```

- *Type:* string

---

##### `TimeOfExpiry`<sup>Required</sup> <a name="TimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeOfExpiry"></a>

```csharp
public string TimeOfExpiry { get; }
```

- *Type:* string

---

##### `TimeRequested`<sup>Required</sup> <a name="TimeRequested" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.timeRequested"></a>

```csharp
public string TimeRequested { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItems</a>

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get"></a>

```csharp
private DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection">DataOciDataSafeAuditArchiveRetrievalsAuditArchiveRetrievalCollection</a>

---


### DataOciDataSafeAuditArchiveRetrievalsFilterList <a name="DataOciDataSafeAuditArchiveRetrievalsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get"></a>

```csharp
private DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference <a name="DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrievals.DataOciDataSafeAuditArchiveRetrievalsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



