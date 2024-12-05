# `dataOciDataSafeMaskingPolicyMaskingObjects` Submodule <a name="`dataOciDataSafeMaskingPolicyMaskingObjects` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyMaskingObjects <a name="DataOciDataSafeMaskingPolicyMaskingObjects" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects oci_data_safe_masking_policy_masking_objects}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjects(Construct Scope, string Id, DataOciDataSafeMaskingPolicyMaskingObjectsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig">DataOciDataSafeMaskingPolicyMaskingObjectsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig">DataOciDataSafeMaskingPolicyMaskingObjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetObjectType">ResetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetObject"></a>

```csharp
private void ResetObject()
```

##### `ResetObjectType` <a name="ResetObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetObjectType"></a>

```csharp
private void ResetObjectType()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyMaskingObjects resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyMaskingObjects.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyMaskingObjects.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyMaskingObjects.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyMaskingObjects.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyMaskingObjects resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyMaskingObjects to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingPolicyMaskingObjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyMaskingObjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList">DataOciDataSafeMaskingPolicyMaskingObjectsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.maskingObjectCollection">MaskingObjectCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList">DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.objectInput">ObjectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.schemaNameInput">SchemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.object">Object</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.objectType">ObjectType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.schemaName">SchemaName</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.filter"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingObjectsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList">DataOciDataSafeMaskingPolicyMaskingObjectsFilterList</a>

---

##### `MaskingObjectCollection`<sup>Required</sup> <a name="MaskingObjectCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.maskingObjectCollection"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList MaskingObjectCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList">DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.maskingPolicyIdInput"></a>

```csharp
public string MaskingPolicyIdInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.objectInput"></a>

```csharp
public string[] ObjectInput { get; }
```

- *Type:* string[]

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.objectTypeInput"></a>

```csharp
public string[] ObjectTypeInput { get; }
```

- *Type:* string[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.schemaNameInput"></a>

```csharp
public string[] SchemaNameInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.object"></a>

```csharp
public string[] Object { get; }
```

- *Type:* string[]

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.objectType"></a>

```csharp
public string[] ObjectType { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.schemaName"></a>

```csharp
public string[] SchemaName { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjects.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyMaskingObjectsConfig <a name="DataOciDataSafeMaskingPolicyMaskingObjectsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MaskingPolicyId,
    object Filter = null,
    string Id = null,
    string[] Object = null,
    string[] ObjectType = null,
    string[] SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#masking_policy_id DataOciDataSafeMaskingPolicyMaskingObjects#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#id DataOciDataSafeMaskingPolicyMaskingObjects#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.object">Object</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#object DataOciDataSafeMaskingPolicyMaskingObjects#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.objectType">ObjectType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#object_type DataOciDataSafeMaskingPolicyMaskingObjects#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.schemaName">SchemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#schema_name DataOciDataSafeMaskingPolicyMaskingObjects#schema_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#masking_policy_id DataOciDataSafeMaskingPolicyMaskingObjects#masking_policy_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#filter DataOciDataSafeMaskingPolicyMaskingObjects#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#id DataOciDataSafeMaskingPolicyMaskingObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.object"></a>

```csharp
public string[] Object { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#object DataOciDataSafeMaskingPolicyMaskingObjects#object}.

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.objectType"></a>

```csharp
public string[] ObjectType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#object_type DataOciDataSafeMaskingPolicyMaskingObjects#object_type}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsConfig.property.schemaName"></a>

```csharp
public string[] SchemaName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#schema_name DataOciDataSafeMaskingPolicyMaskingObjects#schema_name}.

---

### DataOciDataSafeMaskingPolicyMaskingObjectsFilter <a name="DataOciDataSafeMaskingPolicyMaskingObjectsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#name DataOciDataSafeMaskingPolicyMaskingObjects#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#values DataOciDataSafeMaskingPolicyMaskingObjects#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#regex DataOciDataSafeMaskingPolicyMaskingObjects#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#name DataOciDataSafeMaskingPolicyMaskingObjects#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#values DataOciDataSafeMaskingPolicyMaskingObjects#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_objects#regex DataOciDataSafeMaskingPolicyMaskingObjects#regex}.

---

### DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection <a name="DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection {

};
```


### DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems <a name="DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyMaskingObjectsFilterList <a name="DataOciDataSafeMaskingPolicyMaskingObjectsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.get"></a>

```csharp
private DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList <a name="DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems">DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems">DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList <a name="DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.get"></a>

```csharp
private DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList">DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection">DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList">DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingObjects.DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection">DataOciDataSafeMaskingPolicyMaskingObjectsMaskingObjectCollection</a>

---


