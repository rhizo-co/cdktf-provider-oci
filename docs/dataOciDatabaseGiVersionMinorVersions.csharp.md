# `dataOciDatabaseGiVersionMinorVersions` Submodule <a name="`dataOciDatabaseGiVersionMinorVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseGiVersionMinorVersions <a name="DataOciDatabaseGiVersionMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions oci_database_gi_version_minor_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseGiVersionMinorVersions(Construct Scope, string Id, DataOciDatabaseGiVersionMinorVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig">DataOciDatabaseGiVersionMinorVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig">DataOciDatabaseGiVersionMinorVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetIsGiVersionForProvisioning">ResetIsGiVersionForProvisioning</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShapeFamily">ResetShapeFamily</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsGiVersionForProvisioning` <a name="ResetIsGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetIsGiVersionForProvisioning"></a>

```csharp
private void ResetIsGiVersionForProvisioning()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShape"></a>

```csharp
private void ResetShape()
```

##### `ResetShapeFamily` <a name="ResetShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShapeFamily"></a>

```csharp
private void ResetShapeFamily()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseGiVersionMinorVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseGiVersionMinorVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseGiVersionMinorVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseGiVersionMinorVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseGiVersionMinorVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseGiVersionMinorVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseGiVersionMinorVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseGiVersionMinorVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseGiVersionMinorVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList">DataOciDatabaseGiVersionMinorVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.giMinorVersions">GiMinorVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList">DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioningInput">IsGiVersionForProvisioningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamilyInput">ShapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioning">IsGiVersionForProvisioning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamily">ShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filter"></a>

```csharp
public DataOciDatabaseGiVersionMinorVersionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList">DataOciDatabaseGiVersionMinorVersionsFilterList</a>

---

##### `GiMinorVersions`<sup>Required</sup> <a name="GiMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.giMinorVersions"></a>

```csharp
public DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList GiMinorVersions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList">DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsGiVersionForProvisioningInput`<sup>Optional</sup> <a name="IsGiVersionForProvisioningInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioningInput"></a>

```csharp
public object IsGiVersionForProvisioningInput { get; }
```

- *Type:* object

---

##### `ShapeFamilyInput`<sup>Optional</sup> <a name="ShapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamilyInput"></a>

```csharp
public string ShapeFamilyInput { get; }
```

- *Type:* string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsGiVersionForProvisioning`<sup>Required</sup> <a name="IsGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioning"></a>

```csharp
public object IsGiVersionForProvisioning { get; }
```

- *Type:* object

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `ShapeFamily`<sup>Required</sup> <a name="ShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamily"></a>

```csharp
public string ShapeFamily { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseGiVersionMinorVersionsConfig <a name="DataOciDatabaseGiVersionMinorVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseGiVersionMinorVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Version,
    string AvailabilityDomain = null,
    string CompartmentId = null,
    object Filter = null,
    string Id = null,
    object IsGiVersionForProvisioning = null,
    string Shape = null,
    string ShapeFamily = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#version DataOciDatabaseGiVersionMinorVersions#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#availability_domain DataOciDatabaseGiVersionMinorVersions#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#compartment_id DataOciDatabaseGiVersionMinorVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#id DataOciDatabaseGiVersionMinorVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.isGiVersionForProvisioning">IsGiVersionForProvisioning</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#is_gi_version_for_provisioning DataOciDatabaseGiVersionMinorVersions#is_gi_version_for_provisioning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape DataOciDatabaseGiVersionMinorVersions#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shapeFamily">ShapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape_family DataOciDatabaseGiVersionMinorVersions#shape_family}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#version DataOciDatabaseGiVersionMinorVersions#version}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#availability_domain DataOciDatabaseGiVersionMinorVersions#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#compartment_id DataOciDatabaseGiVersionMinorVersions#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#filter DataOciDatabaseGiVersionMinorVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#id DataOciDatabaseGiVersionMinorVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsGiVersionForProvisioning`<sup>Optional</sup> <a name="IsGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.isGiVersionForProvisioning"></a>

```csharp
public object IsGiVersionForProvisioning { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#is_gi_version_for_provisioning DataOciDatabaseGiVersionMinorVersions#is_gi_version_for_provisioning}.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape DataOciDatabaseGiVersionMinorVersions#shape}.

---

##### `ShapeFamily`<sup>Optional</sup> <a name="ShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shapeFamily"></a>

```csharp
public string ShapeFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape_family DataOciDatabaseGiVersionMinorVersions#shape_family}.

---

### DataOciDatabaseGiVersionMinorVersionsFilter <a name="DataOciDatabaseGiVersionMinorVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseGiVersionMinorVersionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#name DataOciDatabaseGiVersionMinorVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#values DataOciDatabaseGiVersionMinorVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#regex DataOciDatabaseGiVersionMinorVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#name DataOciDatabaseGiVersionMinorVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#values DataOciDatabaseGiVersionMinorVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#regex DataOciDatabaseGiVersionMinorVersions#regex}.

---

### DataOciDatabaseGiVersionMinorVersionsGiMinorVersions <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseGiVersionMinorVersionsGiMinorVersions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseGiVersionMinorVersionsFilterList <a name="DataOciDatabaseGiVersionMinorVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseGiVersionMinorVersionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get"></a>

```csharp
private DataOciDatabaseGiVersionMinorVersionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseGiVersionMinorVersionsFilterOutputReference <a name="DataOciDatabaseGiVersionMinorVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseGiVersionMinorVersionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get"></a>

```csharp
private DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.gridImageId">GridImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions">DataOciDatabaseGiVersionMinorVersionsGiMinorVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.gridImageId"></a>

```csharp
public string GridImageId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseGiVersionMinorVersionsGiMinorVersions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions">DataOciDatabaseGiVersionMinorVersionsGiMinorVersions</a>

---



