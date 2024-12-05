# `dataOciBdsBdsInstanceListOsPatches` Submodule <a name="`dataOciBdsBdsInstanceListOsPatches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceListOsPatches <a name="DataOciBdsBdsInstanceListOsPatches" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches oci_bds_bds_instance_list_os_patches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceListOsPatches(Construct Scope, string Id, DataOciBdsBdsInstanceListOsPatchesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig">DataOciBdsBdsInstanceListOsPatchesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig">DataOciBdsBdsInstanceListOsPatchesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceListOsPatches resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceListOsPatches.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceListOsPatches.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceListOsPatches.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceListOsPatches.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceListOsPatches resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceListOsPatches to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceListOsPatches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceListOsPatches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList">DataOciBdsBdsInstanceListOsPatchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.osPatches">OsPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList">DataOciBdsBdsInstanceListOsPatchesOsPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.filter"></a>

```csharp
public DataOciBdsBdsInstanceListOsPatchesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList">DataOciBdsBdsInstanceListOsPatchesFilterList</a>

---

##### `OsPatches`<sup>Required</sup> <a name="OsPatches" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.osPatches"></a>

```csharp
public DataOciBdsBdsInstanceListOsPatchesOsPatchesList OsPatches { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList">DataOciBdsBdsInstanceListOsPatchesOsPatchesList</a>

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.bdsInstanceIdInput"></a>

```csharp
public string BdsInstanceIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatches.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceListOsPatchesConfig <a name="DataOciBdsBdsInstanceListOsPatchesConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceListOsPatchesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BdsInstanceId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#bds_instance_id DataOciBdsBdsInstanceListOsPatches#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#id DataOciBdsBdsInstanceListOsPatches#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#bds_instance_id DataOciBdsBdsInstanceListOsPatches#bds_instance_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#filter DataOciBdsBdsInstanceListOsPatches#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#id DataOciBdsBdsInstanceListOsPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBdsBdsInstanceListOsPatchesFilter <a name="DataOciBdsBdsInstanceListOsPatchesFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceListOsPatchesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#name DataOciBdsBdsInstanceListOsPatches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#values DataOciBdsBdsInstanceListOsPatches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#regex DataOciBdsBdsInstanceListOsPatches#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#name DataOciBdsBdsInstanceListOsPatches#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#values DataOciBdsBdsInstanceListOsPatches#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_list_os_patches#regex DataOciBdsBdsInstanceListOsPatches#regex}.

---

### DataOciBdsBdsInstanceListOsPatchesOsPatches <a name="DataOciBdsBdsInstanceListOsPatchesOsPatches" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceListOsPatchesOsPatches {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceListOsPatchesFilterList <a name="DataOciBdsBdsInstanceListOsPatchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceListOsPatchesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.get"></a>

```csharp
private DataOciBdsBdsInstanceListOsPatchesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciBdsBdsInstanceListOsPatchesFilterOutputReference <a name="DataOciBdsBdsInstanceListOsPatchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceListOsPatchesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciBdsBdsInstanceListOsPatchesOsPatchesList <a name="DataOciBdsBdsInstanceListOsPatchesOsPatchesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceListOsPatchesOsPatchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.get"></a>

```csharp
private DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference <a name="DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.osPatchVersion">OsPatchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.releaseDate">ReleaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches">DataOciBdsBdsInstanceListOsPatchesOsPatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.osPatchVersion"></a>

```csharp
public string OsPatchVersion { get; }
```

- *Type:* string

---

##### `ReleaseDate`<sup>Required</sup> <a name="ReleaseDate" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.releaseDate"></a>

```csharp
public string ReleaseDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatchesOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsBdsInstanceListOsPatchesOsPatches InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceListOsPatches.DataOciBdsBdsInstanceListOsPatchesOsPatches">DataOciBdsBdsInstanceListOsPatchesOsPatches</a>

---



