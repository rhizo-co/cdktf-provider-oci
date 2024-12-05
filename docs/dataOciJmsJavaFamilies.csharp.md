# `dataOciJmsJavaFamilies` Submodule <a name="`dataOciJmsJavaFamilies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaFamilies <a name="DataOciJmsJavaFamilies" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families oci_jms_java_families}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamilies(Construct Scope, string Id, DataOciJmsJavaFamiliesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig">DataOciJmsJavaFamiliesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig">DataOciJmsJavaFamiliesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFamilyVersion">ResetFamilyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetIsSupportedVersion">ResetIsSupportedVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFamilyVersion` <a name="ResetFamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFamilyVersion"></a>

```csharp
private void ResetFamilyVersion()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSupportedVersion` <a name="ResetIsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.resetIsSupportedVersion"></a>

```csharp
private void ResetIsSupportedVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaFamilies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsJavaFamilies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsJavaFamilies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsJavaFamilies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciJmsJavaFamilies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciJmsJavaFamilies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsJavaFamilies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsJavaFamilies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaFamilies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList">DataOciJmsJavaFamiliesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.javaFamilyCollection">JavaFamilyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList">DataOciJmsJavaFamiliesJavaFamilyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersionInput">FamilyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersionInput">IsSupportedVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersion">FamilyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersion">IsSupportedVersion</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filter"></a>

```csharp
public DataOciJmsJavaFamiliesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList">DataOciJmsJavaFamiliesFilterList</a>

---

##### `JavaFamilyCollection`<sup>Required</sup> <a name="JavaFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.javaFamilyCollection"></a>

```csharp
public DataOciJmsJavaFamiliesJavaFamilyCollectionList JavaFamilyCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList">DataOciJmsJavaFamiliesJavaFamilyCollectionList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FamilyVersionInput`<sup>Optional</sup> <a name="FamilyVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersionInput"></a>

```csharp
public string FamilyVersionInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSupportedVersionInput`<sup>Optional</sup> <a name="IsSupportedVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersionInput"></a>

```csharp
public object IsSupportedVersionInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.familyVersion"></a>

```csharp
public string FamilyVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSupportedVersion`<sup>Required</sup> <a name="IsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.isSupportedVersion"></a>

```csharp
public object IsSupportedVersion { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamilies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaFamiliesConfig <a name="DataOciJmsJavaFamiliesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName = null,
    string FamilyVersion = null,
    object Filter = null,
    string Id = null,
    object IsSupportedVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.familyVersion">FamilyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.isSupportedVersion">IsSupportedVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#display_name DataOciJmsJavaFamilies#display_name}.

---

##### `FamilyVersion`<sup>Optional</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.familyVersion"></a>

```csharp
public string FamilyVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#family_version DataOciJmsJavaFamilies#family_version}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#filter DataOciJmsJavaFamilies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#id DataOciJmsJavaFamilies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSupportedVersion`<sup>Optional</sup> <a name="IsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesConfig.property.isSupportedVersion"></a>

```csharp
public object IsSupportedVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#is_supported_version DataOciJmsJavaFamilies#is_supported_version}.

---

### DataOciJmsJavaFamiliesFilter <a name="DataOciJmsJavaFamiliesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#name DataOciJmsJavaFamilies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#values DataOciJmsJavaFamilies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#regex DataOciJmsJavaFamilies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#name DataOciJmsJavaFamilies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#values DataOciJmsJavaFamilies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_families#regex DataOciJmsJavaFamilies#regex}.

---

### DataOciJmsJavaFamiliesJavaFamilyCollection <a name="DataOciJmsJavaFamiliesJavaFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollection {

};
```


### DataOciJmsJavaFamiliesJavaFamilyCollectionItems <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollectionItems {

};
```


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaFamiliesFilterList <a name="DataOciJmsJavaFamiliesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get"></a>

```csharp
private DataOciJmsJavaFamiliesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciJmsJavaFamiliesFilterOutputReference <a name="DataOciJmsJavaFamiliesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get"></a>

```csharp
private DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes">ApproximateFileSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactContentType">ArtifactContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactDescription">ArtifactDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactFileName">ArtifactFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.downloadUrl">DownloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageType">PackageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageTypeDetail">PackageTypeDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl">ScriptChecksumUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl">ScriptDownloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApproximateFileSizeInBytes`<sup>Required</sup> <a name="ApproximateFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```csharp
public string ApproximateFileSizeInBytes { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `ArtifactContentType`<sup>Required</sup> <a name="ArtifactContentType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactContentType"></a>

```csharp
public string ArtifactContentType { get; }
```

- *Type:* string

---

##### `ArtifactDescription`<sup>Required</sup> <a name="ArtifactDescription" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactDescription"></a>

```csharp
public string ArtifactDescription { get; }
```

- *Type:* string

---

##### `ArtifactFileName`<sup>Required</sup> <a name="ArtifactFileName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactFileName"></a>

```csharp
public string ArtifactFileName { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `DownloadUrl`<sup>Required</sup> <a name="DownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.downloadUrl"></a>

```csharp
public string DownloadUrl { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageType"></a>

```csharp
public string PackageType { get; }
```

- *Type:* string

---

##### `PackageTypeDetail`<sup>Required</sup> <a name="PackageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.packageTypeDetail"></a>

```csharp
public string PackageTypeDetail { get; }
```

- *Type:* string

---

##### `ScriptChecksumUrl`<sup>Required</sup> <a name="ScriptChecksumUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl"></a>

```csharp
public string ScriptChecksumUrl { get; }
```

- *Type:* string

---

##### `ScriptDownloadUrl`<sup>Required</sup> <a name="ScriptDownloadUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl"></a>

```csharp
public string ScriptDownloadUrl { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifacts</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get"></a>

```csharp
private DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.docUrl">DocUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.endOfSupportLifeDate">EndOfSupportLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.familyVersion">FamilyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.isSupportedVersion">IsSupportedVersion</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseArtifacts">LatestReleaseArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseVersion">LatestReleaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.supportType">SupportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems">DataOciJmsJavaFamiliesJavaFamilyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DocUrl`<sup>Required</sup> <a name="DocUrl" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.docUrl"></a>

```csharp
public string DocUrl { get; }
```

- *Type:* string

---

##### `EndOfSupportLifeDate`<sup>Required</sup> <a name="EndOfSupportLifeDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.endOfSupportLifeDate"></a>

```csharp
public string EndOfSupportLifeDate { get; }
```

- *Type:* string

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.familyVersion"></a>

```csharp
public string FamilyVersion { get; }
```

- *Type:* string

---

##### `IsSupportedVersion`<sup>Required</sup> <a name="IsSupportedVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.isSupportedVersion"></a>

```csharp
public IResolvable IsSupportedVersion { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LatestReleaseArtifacts`<sup>Required</sup> <a name="LatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseArtifacts"></a>

```csharp
public DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList LatestReleaseArtifacts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsLatestReleaseArtifactsList</a>

---

##### `LatestReleaseVersion`<sup>Required</sup> <a name="LatestReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.latestReleaseVersion"></a>

```csharp
public string LatestReleaseVersion { get; }
```

- *Type:* string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.releaseDate"></a>

```csharp
public string ReleaseDate { get; }
```

- *Type:* string

---

##### `SupportType`<sup>Required</sup> <a name="SupportType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.supportType"></a>

```csharp
public string SupportType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsJavaFamiliesJavaFamilyCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItems">DataOciJmsJavaFamiliesJavaFamilyCollectionItems</a>

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionList <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get"></a>

```csharp
private DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference <a name="DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection">DataOciJmsJavaFamiliesJavaFamilyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.items"></a>

```csharp
public DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList">DataOciJmsJavaFamiliesJavaFamilyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciJmsJavaFamiliesJavaFamilyCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamilies.DataOciJmsJavaFamiliesJavaFamilyCollection">DataOciJmsJavaFamiliesJavaFamilyCollection</a>

---



