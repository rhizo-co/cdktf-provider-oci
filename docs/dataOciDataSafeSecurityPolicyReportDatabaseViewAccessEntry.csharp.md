# `dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry` Submodule <a name="`dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry oci_data_safe_security_policy_report_database_view_access_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry(Construct Scope, string Id, DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantee">Grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantFromRole">GrantFromRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantor">Grantor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByDatabaseVault">IsAccessConstrainedByDatabaseVault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByRealApplicationSecurity">IsAccessConstrainedByRealApplicationSecurity</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByRedaction">IsAccessConstrainedByRedaction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedBySqlFirewall">IsAccessConstrainedBySqlFirewall</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByVirtualPrivateDatabase">IsAccessConstrainedByVirtualPrivateDatabase</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilege">Privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilegeGrantable">PrivilegeGrantable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilegeType">PrivilegeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tableSchema">TableSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewName">ViewName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewSchema">ViewSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewText">ViewText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.databaseViewAccessEntryKeyInput">DatabaseViewAccessEntryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.securityPolicyReportIdInput">SecurityPolicyReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.databaseViewAccessEntryKey">DatabaseViewAccessEntryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.securityPolicyReportId">SecurityPolicyReportId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantee"></a>

```csharp
public string Grantee { get; }
```

- *Type:* string

---

##### `GrantFromRole`<sup>Required</sup> <a name="GrantFromRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantFromRole"></a>

```csharp
public string GrantFromRole { get; }
```

- *Type:* string

---

##### `Grantor`<sup>Required</sup> <a name="Grantor" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.grantor"></a>

```csharp
public string Grantor { get; }
```

- *Type:* string

---

##### `IsAccessConstrainedByDatabaseVault`<sup>Required</sup> <a name="IsAccessConstrainedByDatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByDatabaseVault"></a>

```csharp
public IResolvable IsAccessConstrainedByDatabaseVault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAccessConstrainedByRealApplicationSecurity`<sup>Required</sup> <a name="IsAccessConstrainedByRealApplicationSecurity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByRealApplicationSecurity"></a>

```csharp
public IResolvable IsAccessConstrainedByRealApplicationSecurity { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAccessConstrainedByRedaction`<sup>Required</sup> <a name="IsAccessConstrainedByRedaction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByRedaction"></a>

```csharp
public IResolvable IsAccessConstrainedByRedaction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAccessConstrainedBySqlFirewall`<sup>Required</sup> <a name="IsAccessConstrainedBySqlFirewall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedBySqlFirewall"></a>

```csharp
public IResolvable IsAccessConstrainedBySqlFirewall { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsAccessConstrainedByVirtualPrivateDatabase`<sup>Required</sup> <a name="IsAccessConstrainedByVirtualPrivateDatabase" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.isAccessConstrainedByVirtualPrivateDatabase"></a>

```csharp
public IResolvable IsAccessConstrainedByVirtualPrivateDatabase { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilege"></a>

```csharp
public string Privilege { get; }
```

- *Type:* string

---

##### `PrivilegeGrantable`<sup>Required</sup> <a name="PrivilegeGrantable" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilegeGrantable"></a>

```csharp
public string PrivilegeGrantable { get; }
```

- *Type:* string

---

##### `PrivilegeType`<sup>Required</sup> <a name="PrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.privilegeType"></a>

```csharp
public string PrivilegeType { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `TableSchema`<sup>Required</sup> <a name="TableSchema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tableSchema"></a>

```csharp
public string TableSchema { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `ViewName`<sup>Required</sup> <a name="ViewName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewName"></a>

```csharp
public string ViewName { get; }
```

- *Type:* string

---

##### `ViewSchema`<sup>Required</sup> <a name="ViewSchema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewSchema"></a>

```csharp
public string ViewSchema { get; }
```

- *Type:* string

---

##### `ViewText`<sup>Required</sup> <a name="ViewText" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.viewText"></a>

```csharp
public string ViewText { get; }
```

- *Type:* string

---

##### `DatabaseViewAccessEntryKeyInput`<sup>Optional</sup> <a name="DatabaseViewAccessEntryKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.databaseViewAccessEntryKeyInput"></a>

```csharp
public string DatabaseViewAccessEntryKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyReportIdInput`<sup>Optional</sup> <a name="SecurityPolicyReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.securityPolicyReportIdInput"></a>

```csharp
public string SecurityPolicyReportIdInput { get; }
```

- *Type:* string

---

##### `DatabaseViewAccessEntryKey`<sup>Required</sup> <a name="DatabaseViewAccessEntryKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.databaseViewAccessEntryKey"></a>

```csharp
public string DatabaseViewAccessEntryKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityPolicyReportId`<sup>Required</sup> <a name="SecurityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.securityPolicyReportId"></a>

```csharp
public string SecurityPolicyReportId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseViewAccessEntryKey,
    string SecurityPolicyReportId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.databaseViewAccessEntryKey">DatabaseViewAccessEntryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#database_view_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#database_view_access_entry_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.securityPolicyReportId">SecurityPolicyReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseViewAccessEntryKey`<sup>Required</sup> <a name="DatabaseViewAccessEntryKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.databaseViewAccessEntryKey"></a>

```csharp
public string DatabaseViewAccessEntryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#database_view_access_entry_key DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#database_view_access_entry_key}.

---

##### `SecurityPolicyReportId`<sup>Required</sup> <a name="SecurityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.securityPolicyReportId"></a>

```csharp
public string SecurityPolicyReportId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#security_policy_report_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entry#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



