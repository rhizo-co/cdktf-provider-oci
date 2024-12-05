# `dataOciFunctionsPbfListingVersion` Submodule <a name="`dataOciFunctionsPbfListingVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFunctionsPbfListingVersion <a name="DataOciFunctionsPbfListingVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_version oci_functions_pbf_listing_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersion(Construct Scope, string Id, DataOciFunctionsPbfListingVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig">DataOciFunctionsPbfListingVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig">DataOciFunctionsPbfListingVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFunctionsPbfListingVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFunctionsPbfListingVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFunctionsPbfListingVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFunctionsPbfListingVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFunctionsPbfListingVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFunctionsPbfListingVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFunctionsPbfListingVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFunctionsPbfListingVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFunctionsPbfListingVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.changeSummary">ChangeSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList">DataOciFunctionsPbfListingVersionConfigAList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.pbfListingId">PbfListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.requirements">Requirements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList">DataOciFunctionsPbfListingVersionRequirementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.triggers">Triggers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList">DataOciFunctionsPbfListingVersionTriggersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.pbfListingVersionIdInput">PbfListingVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.pbfListingVersionId">PbfListingVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ChangeSummary`<sup>Required</sup> <a name="ChangeSummary" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.changeSummary"></a>

```csharp
public string ChangeSummary { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.config"></a>

```csharp
public DataOciFunctionsPbfListingVersionConfigAList Config { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList">DataOciFunctionsPbfListingVersionConfigAList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PbfListingId`<sup>Required</sup> <a name="PbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.pbfListingId"></a>

```csharp
public string PbfListingId { get; }
```

- *Type:* string

---

##### `Requirements`<sup>Required</sup> <a name="Requirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.requirements"></a>

```csharp
public DataOciFunctionsPbfListingVersionRequirementsList Requirements { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList">DataOciFunctionsPbfListingVersionRequirementsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.triggers"></a>

```csharp
public DataOciFunctionsPbfListingVersionTriggersList Triggers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList">DataOciFunctionsPbfListingVersionTriggersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PbfListingVersionIdInput`<sup>Optional</sup> <a name="PbfListingVersionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.pbfListingVersionIdInput"></a>

```csharp
public string PbfListingVersionIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PbfListingVersionId`<sup>Required</sup> <a name="PbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.pbfListingVersionId"></a>

```csharp
public string PbfListingVersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFunctionsPbfListingVersionConfig <a name="DataOciFunctionsPbfListingVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PbfListingVersionId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.pbfListingVersionId">PbfListingVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_version#pbf_listing_version_id DataOciFunctionsPbfListingVersion#pbf_listing_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_version#id DataOciFunctionsPbfListingVersion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PbfListingVersionId`<sup>Required</sup> <a name="PbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.pbfListingVersionId"></a>

```csharp
public string PbfListingVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_version#pbf_listing_version_id DataOciFunctionsPbfListingVersion#pbf_listing_version_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_version#id DataOciFunctionsPbfListingVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFunctionsPbfListingVersionConfigA <a name="DataOciFunctionsPbfListingVersionConfigA" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionConfigA {

};
```


### DataOciFunctionsPbfListingVersionRequirements <a name="DataOciFunctionsPbfListingVersionRequirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionRequirements {

};
```


### DataOciFunctionsPbfListingVersionRequirementsPolicies <a name="DataOciFunctionsPbfListingVersionRequirementsPolicies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionRequirementsPolicies {

};
```


### DataOciFunctionsPbfListingVersionTriggers <a name="DataOciFunctionsPbfListingVersionTriggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionTriggers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFunctionsPbfListingVersionConfigAList <a name="DataOciFunctionsPbfListingVersionConfigAList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionConfigAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.get"></a>

```csharp
private DataOciFunctionsPbfListingVersionConfigAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionConfigAOutputReference <a name="DataOciFunctionsPbfListingVersionConfigAOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.isOptional">IsOptional</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigA">DataOciFunctionsPbfListingVersionConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IsOptional`<sup>Required</sup> <a name="IsOptional" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.isOptional"></a>

```csharp
public IResolvable IsOptional { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigAOutputReference.property.internalValue"></a>

```csharp
public DataOciFunctionsPbfListingVersionConfigA InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionConfigA">DataOciFunctionsPbfListingVersionConfigA</a>

---


### DataOciFunctionsPbfListingVersionRequirementsList <a name="DataOciFunctionsPbfListingVersionRequirementsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionRequirementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.get"></a>

```csharp
private DataOciFunctionsPbfListingVersionRequirementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionRequirementsOutputReference <a name="DataOciFunctionsPbfListingVersionRequirementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.minMemoryRequiredInMbs">MinMemoryRequiredInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.policies">Policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList">DataOciFunctionsPbfListingVersionRequirementsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirements">DataOciFunctionsPbfListingVersionRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinMemoryRequiredInMbs`<sup>Required</sup> <a name="MinMemoryRequiredInMbs" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.minMemoryRequiredInMbs"></a>

```csharp
public string MinMemoryRequiredInMbs { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.policies"></a>

```csharp
public DataOciFunctionsPbfListingVersionRequirementsPoliciesList Policies { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList">DataOciFunctionsPbfListingVersionRequirementsPoliciesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsOutputReference.property.internalValue"></a>

```csharp
public DataOciFunctionsPbfListingVersionRequirements InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirements">DataOciFunctionsPbfListingVersionRequirements</a>

---


### DataOciFunctionsPbfListingVersionRequirementsPoliciesList <a name="DataOciFunctionsPbfListingVersionRequirementsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionRequirementsPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.get"></a>

```csharp
private DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference <a name="DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPolicies">DataOciFunctionsPbfListingVersionRequirementsPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataOciFunctionsPbfListingVersionRequirementsPolicies InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionRequirementsPolicies">DataOciFunctionsPbfListingVersionRequirementsPolicies</a>

---


### DataOciFunctionsPbfListingVersionTriggersList <a name="DataOciFunctionsPbfListingVersionTriggersList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionTriggersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.get"></a>

```csharp
private DataOciFunctionsPbfListingVersionTriggersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFunctionsPbfListingVersionTriggersOutputReference <a name="DataOciFunctionsPbfListingVersionTriggersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFunctionsPbfListingVersionTriggersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggers">DataOciFunctionsPbfListingVersionTriggers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggersOutputReference.property.internalValue"></a>

```csharp
public DataOciFunctionsPbfListingVersionTriggers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersion.DataOciFunctionsPbfListingVersionTriggers">DataOciFunctionsPbfListingVersionTriggers</a>

---



