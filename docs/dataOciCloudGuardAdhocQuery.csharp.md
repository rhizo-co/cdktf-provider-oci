# `dataOciCloudGuardAdhocQuery` Submodule <a name="`dataOciCloudGuardAdhocQuery` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardAdhocQuery <a name="DataOciCloudGuardAdhocQuery" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query oci_cloud_guard_adhoc_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQuery(Construct Scope, string Id, DataOciCloudGuardAdhocQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig">DataOciCloudGuardAdhocQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig">DataOciCloudGuardAdhocQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardAdhocQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardAdhocQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardAdhocQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardAdhocQuery.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardAdhocQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCloudGuardAdhocQuery resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardAdhocQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardAdhocQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardAdhocQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryDetails">AdhocQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList">DataOciCloudGuardAdhocQueryAdhocQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryRegionalDetails">AdhocQueryRegionalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryIdInput">AdhocQueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryId">AdhocQueryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AdhocQueryDetails`<sup>Required</sup> <a name="AdhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryDetails"></a>

```csharp
public DataOciCloudGuardAdhocQueryAdhocQueryDetailsList AdhocQueryDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList">DataOciCloudGuardAdhocQueryAdhocQueryDetailsList</a>

---

##### `AdhocQueryRegionalDetails`<sup>Required</sup> <a name="AdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryRegionalDetails"></a>

```csharp
public DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList AdhocQueryRegionalDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AdhocQueryIdInput`<sup>Optional</sup> <a name="AdhocQueryIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryIdInput"></a>

```csharp
public string AdhocQueryIdInput { get; }
```

- *Type:* string

---

##### `AdhocQueryId`<sup>Required</sup> <a name="AdhocQueryId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryId"></a>

```csharp
public string AdhocQueryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardAdhocQueryAdhocQueryDetails <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryDetails {

};
```


### DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources {

};
```


### DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails <a name="DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails {

};
```


### DataOciCloudGuardAdhocQueryConfig <a name="DataOciCloudGuardAdhocQueryConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdhocQueryId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.adhocQueryId">AdhocQueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query#adhoc_query_id DataOciCloudGuardAdhocQuery#adhoc_query_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdhocQueryId`<sup>Required</sup> <a name="AdhocQueryId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.adhocQueryId"></a>

```csharp
public string AdhocQueryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query#adhoc_query_id DataOciCloudGuardAdhocQuery#adhoc_query_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get"></a>

```csharp
private DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds">ResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds"></a>

```csharp
public string[] ResourceIds { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>

---


### DataOciCloudGuardAdhocQueryAdhocQueryDetailsList <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.get"></a>

```csharp
private DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.adhocQueryResources">AdhocQueryResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails">DataOciCloudGuardAdhocQueryAdhocQueryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdhocQueryResources`<sup>Required</sup> <a name="AdhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.adhocQueryResources"></a>

```csharp
public DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList AdhocQueryResources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardAdhocQueryAdhocQueryDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails">DataOciCloudGuardAdhocQueryAdhocQueryDetails</a>

---


### DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList <a name="DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get"></a>

```csharp
private DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference <a name="DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expectedCount">ExpectedCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expiredCount">ExpiredCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.failedCount">FailedCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalError">RegionalError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalStatus">RegionalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.succeededCount">SucceededCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpectedCount`<sup>Required</sup> <a name="ExpectedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expectedCount"></a>

```csharp
public string ExpectedCount { get; }
```

- *Type:* string

---

##### `ExpiredCount`<sup>Required</sup> <a name="ExpiredCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expiredCount"></a>

```csharp
public string ExpiredCount { get; }
```

- *Type:* string

---

##### `FailedCount`<sup>Required</sup> <a name="FailedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.failedCount"></a>

```csharp
public string FailedCount { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RegionalError`<sup>Required</sup> <a name="RegionalError" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalError"></a>

```csharp
public string RegionalError { get; }
```

- *Type:* string

---

##### `RegionalStatus`<sup>Required</sup> <a name="RegionalStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalStatus"></a>

```csharp
public string RegionalStatus { get; }
```

- *Type:* string

---

##### `SucceededCount`<sup>Required</sup> <a name="SucceededCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.succeededCount"></a>

```csharp
public string SucceededCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails</a>

---



