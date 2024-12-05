# `dataOciManagementDashboardManagementDashboardsExport` Submodule <a name="`dataOciManagementDashboardManagementDashboardsExport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementDashboardManagementDashboardsExport <a name="DataOciManagementDashboardManagementDashboardsExport" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export oci_management_dashboard_management_dashboards_export}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementDashboardManagementDashboardsExport(Construct Scope, string Id, DataOciManagementDashboardManagementDashboardsExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig">DataOciManagementDashboardManagementDashboardsExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig">DataOciManagementDashboardManagementDashboardsExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementDashboardManagementDashboardsExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementDashboardManagementDashboardsExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementDashboardManagementDashboardsExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementDashboardManagementDashboardsExport.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciManagementDashboardManagementDashboardsExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciManagementDashboardManagementDashboardsExport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementDashboardManagementDashboardsExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementDashboardManagementDashboardsExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementDashboardManagementDashboardsExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDetails">ExportDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDashboardIdInput">ExportDashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDashboardId">ExportDashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExportDetails`<sup>Required</sup> <a name="ExportDetails" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDetails"></a>

```csharp
public string ExportDetails { get; }
```

- *Type:* string

---

##### `ExportDashboardIdInput`<sup>Optional</sup> <a name="ExportDashboardIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDashboardIdInput"></a>

```csharp
public string ExportDashboardIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ExportDashboardId`<sup>Required</sup> <a name="ExportDashboardId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.exportDashboardId"></a>

```csharp
public string ExportDashboardId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementDashboardManagementDashboardsExportConfig <a name="DataOciManagementDashboardManagementDashboardsExportConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciManagementDashboardManagementDashboardsExportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExportDashboardId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.exportDashboardId">ExportDashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#export_dashboard_id DataOciManagementDashboardManagementDashboardsExport#export_dashboard_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#id DataOciManagementDashboardManagementDashboardsExport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExportDashboardId`<sup>Required</sup> <a name="ExportDashboardId" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.exportDashboardId"></a>

```csharp
public string ExportDashboardId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#export_dashboard_id DataOciManagementDashboardManagementDashboardsExport#export_dashboard_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementDashboardManagementDashboardsExport.DataOciManagementDashboardManagementDashboardsExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_dashboard_management_dashboards_export#id DataOciManagementDashboardManagementDashboardsExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



