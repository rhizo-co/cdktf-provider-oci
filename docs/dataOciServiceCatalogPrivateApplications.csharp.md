# `dataOciServiceCatalogPrivateApplications` Submodule <a name="`dataOciServiceCatalogPrivateApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplications <a name="DataOciServiceCatalogPrivateApplications" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications oci_service_catalog_private_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplications(Construct Scope, string Id, DataOciServiceCatalogPrivateApplicationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig">DataOciServiceCatalogPrivateApplicationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig">DataOciServiceCatalogPrivateApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetPrivateApplicationId">ResetPrivateApplicationId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateApplicationId` <a name="ResetPrivateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.resetPrivateApplicationId"></a>

```csharp
private void ResetPrivateApplicationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogPrivateApplications.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogPrivateApplications.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogPrivateApplications.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceCatalogPrivateApplications.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplications resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplications to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogPrivateApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList">DataOciServiceCatalogPrivateApplicationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationCollection">PrivateApplicationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationIdInput">PrivateApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationId">PrivateApplicationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filter"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList">DataOciServiceCatalogPrivateApplicationsFilterList</a>

---

##### `PrivateApplicationCollection`<sup>Required</sup> <a name="PrivateApplicationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationCollection"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList PrivateApplicationCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateApplicationIdInput`<sup>Optional</sup> <a name="PrivateApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationIdInput"></a>

```csharp
public string PrivateApplicationIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateApplicationId`<sup>Required</sup> <a name="PrivateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.privateApplicationId"></a>

```csharp
public string PrivateApplicationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplications.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationsConfig <a name="DataOciServiceCatalogPrivateApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string PrivateApplicationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.privateApplicationId">PrivateApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#compartment_id DataOciServiceCatalogPrivateApplications#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#display_name DataOciServiceCatalogPrivateApplications#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#filter DataOciServiceCatalogPrivateApplications#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#id DataOciServiceCatalogPrivateApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateApplicationId`<sup>Optional</sup> <a name="PrivateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsConfig.property.privateApplicationId"></a>

```csharp
public string PrivateApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#private_application_id DataOciServiceCatalogPrivateApplications#private_application_id}.

---

### DataOciServiceCatalogPrivateApplicationsFilter <a name="DataOciServiceCatalogPrivateApplicationsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#name DataOciServiceCatalogPrivateApplications#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#values DataOciServiceCatalogPrivateApplications#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_applications#regex DataOciServiceCatalogPrivateApplications#regex}.

---

### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection {

};
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems {

};
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo {

};
```


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogPrivateApplicationsFilterList <a name="DataOciServiceCatalogPrivateApplicationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get"></a>

```csharp
private DataOciServiceCatalogPrivateApplicationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceCatalogPrivateApplicationsFilterOutputReference <a name="DataOciServiceCatalogPrivateApplicationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get"></a>

```csharp
private DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get"></a>

```csharp
private DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.contentUrl">ContentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentUrl`<sup>Required</sup> <a name="ContentUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.contentUrl"></a>

```csharp
public string ContentUrl { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogo</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logo">Logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logoFileBase64Encoded">LogoFileBase64Encoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.longDescription">LongDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.shortDescription">ShortDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logo"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList Logo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsLogoList</a>

---

##### `LogoFileBase64Encoded`<sup>Required</sup> <a name="LogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.logoFileBase64Encoded"></a>

```csharp
public string LogoFileBase64Encoded { get; }
```

- *Type:* string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.longDescription"></a>

```csharp
public string LongDescription { get; }
```

- *Type:* string

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageDetails"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList PackageDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.shortDescription"></a>

```csharp
public string ShortDescription { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItems</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get"></a>

```csharp
private DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.zipFileBase64Encoded">ZipFileBase64Encoded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `ZipFileBase64Encoded`<sup>Required</sup> <a name="ZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```csharp
public string ZipFileBase64Encoded { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsPackageDetails</a>

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get"></a>

```csharp
private DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference <a name="DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.items"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplications.DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection">DataOciServiceCatalogPrivateApplicationsPrivateApplicationCollection</a>

---



