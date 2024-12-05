# `dataOciDataSafeAuditArchiveRetrieval` Submodule <a name="`dataOciDataSafeAuditArchiveRetrieval` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditArchiveRetrieval <a name="DataOciDataSafeAuditArchiveRetrieval" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrieval oci_data_safe_audit_archive_retrieval}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrieval(Construct Scope, string Id, DataOciDataSafeAuditArchiveRetrievalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig">DataOciDataSafeAuditArchiveRetrievalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig">DataOciDataSafeAuditArchiveRetrievalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrieval resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditArchiveRetrieval.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditArchiveRetrieval.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditArchiveRetrieval.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeAuditArchiveRetrieval.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrieval resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditArchiveRetrieval to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditArchiveRetrieval that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrieval#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditArchiveRetrieval to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.auditEventCount">AuditEventCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.errorInfo">ErrorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.timeCompleted">TimeCompleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.timeOfExpiry">TimeOfExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.timeRequested">TimeRequested</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.auditArchiveRetrievalIdInput">AuditArchiveRetrievalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.auditArchiveRetrievalId">AuditArchiveRetrievalId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuditEventCount`<sup>Required</sup> <a name="AuditEventCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.auditEventCount"></a>

```csharp
public string AuditEventCount { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.errorInfo"></a>

```csharp
public string ErrorInfo { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCompleted`<sup>Required</sup> <a name="TimeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.timeCompleted"></a>

```csharp
public string TimeCompleted { get; }
```

- *Type:* string

---

##### `TimeOfExpiry`<sup>Required</sup> <a name="TimeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.timeOfExpiry"></a>

```csharp
public string TimeOfExpiry { get; }
```

- *Type:* string

---

##### `TimeRequested`<sup>Required</sup> <a name="TimeRequested" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.timeRequested"></a>

```csharp
public string TimeRequested { get; }
```

- *Type:* string

---

##### `AuditArchiveRetrievalIdInput`<sup>Optional</sup> <a name="AuditArchiveRetrievalIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.auditArchiveRetrievalIdInput"></a>

```csharp
public string AuditArchiveRetrievalIdInput { get; }
```

- *Type:* string

---

##### `AuditArchiveRetrievalId`<sup>Required</sup> <a name="AuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.auditArchiveRetrievalId"></a>

```csharp
public string AuditArchiveRetrievalId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrieval.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditArchiveRetrievalConfig <a name="DataOciDataSafeAuditArchiveRetrievalConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeAuditArchiveRetrievalConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuditArchiveRetrievalId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.auditArchiveRetrievalId">AuditArchiveRetrievalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrieval#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrieval#audit_archive_retrieval_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuditArchiveRetrievalId`<sup>Required</sup> <a name="AuditArchiveRetrievalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditArchiveRetrieval.DataOciDataSafeAuditArchiveRetrievalConfig.property.auditArchiveRetrievalId"></a>

```csharp
public string AuditArchiveRetrievalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_archive_retrieval#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrieval#audit_archive_retrieval_id}.

---



