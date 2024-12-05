# `dataOciCapacityManagementNamespaceOccOverviews` Submodule <a name="`dataOciCapacityManagementNamespaceOccOverviews` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementNamespaceOccOverviews <a name="DataOciCapacityManagementNamespaceOccOverviews" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews oci_capacity_management_namespace_occ_overviews}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviews(Construct Scope, string Id, DataOciCapacityManagementNamespaceOccOverviewsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig">DataOciCapacityManagementNamespaceOccOverviewsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig">DataOciCapacityManagementNamespaceOccOverviewsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetTo">ResetTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFrom` <a name="ResetFrom" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTo` <a name="ResetTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetTo"></a>

```csharp
private void ResetTo()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.resetWorkloadType"></a>

```csharp
private void ResetWorkloadType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementNamespaceOccOverviews resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementNamespaceOccOverviews.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementNamespaceOccOverviews.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementNamespaceOccOverviews.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementNamespaceOccOverviews.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCapacityManagementNamespaceOccOverviews resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementNamespaceOccOverviews to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementNamespaceOccOverviews that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementNamespaceOccOverviews to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList">DataOciCapacityManagementNamespaceOccOverviewsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.occOverviewCollection">OccOverviewCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filter"></a>

```csharp
public DataOciCapacityManagementNamespaceOccOverviewsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList">DataOciCapacityManagementNamespaceOccOverviewsFilterList</a>

---

##### `OccOverviewCollection`<sup>Required</sup> <a name="OccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.occOverviewCollection"></a>

```csharp
public DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList OccOverviewCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadTypeInput"></a>

```csharp
public string WorkloadTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviews.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementNamespaceOccOverviewsConfig <a name="DataOciCapacityManagementNamespaceOccOverviewsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Namespace,
    object Filter = null,
    string From = null,
    string Id = null,
    string To = null,
    string WorkloadType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#compartment_id DataOciCapacityManagementNamespaceOccOverviews#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#namespace DataOciCapacityManagementNamespaceOccOverviews#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#from DataOciCapacityManagementNamespaceOccOverviews#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#id DataOciCapacityManagementNamespaceOccOverviews#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#to DataOciCapacityManagementNamespaceOccOverviews#to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.workloadType">WorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#workload_type DataOciCapacityManagementNamespaceOccOverviews#workload_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#compartment_id DataOciCapacityManagementNamespaceOccOverviews#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#namespace DataOciCapacityManagementNamespaceOccOverviews#namespace}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#filter DataOciCapacityManagementNamespaceOccOverviews#filter}

---

##### `From`<sup>Optional</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#from DataOciCapacityManagementNamespaceOccOverviews#from}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#id DataOciCapacityManagementNamespaceOccOverviews#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `To`<sup>Optional</sup> <a name="To" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#to DataOciCapacityManagementNamespaceOccOverviews#to}.

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsConfig.property.workloadType"></a>

```csharp
public string WorkloadType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#workload_type DataOciCapacityManagementNamespaceOccOverviews#workload_type}.

---

### DataOciCapacityManagementNamespaceOccOverviewsFilter <a name="DataOciCapacityManagementNamespaceOccOverviewsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#name DataOciCapacityManagementNamespaceOccOverviews#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#values DataOciCapacityManagementNamespaceOccOverviews#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#regex DataOciCapacityManagementNamespaceOccOverviews#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#name DataOciCapacityManagementNamespaceOccOverviews#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#values DataOciCapacityManagementNamespaceOccOverviews#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_namespace_occ_overviews#regex DataOciCapacityManagementNamespaceOccOverviews#regex}.

---

### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection {

};
```


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementNamespaceOccOverviewsFilterList <a name="DataOciCapacityManagementNamespaceOccOverviewsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get"></a>

```csharp
private DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get"></a>

```csharp
private DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob">CapacityRequestsBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue">PeriodValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable">TotalAvailable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled">TotalCancelled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded">TotalDemanded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected">TotalRejected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied">TotalSupplied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled">TotalUnfulfilled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob">WorkloadTypeBreakdownBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityRequestsBlob`<sup>Required</sup> <a name="CapacityRequestsBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.capacityRequestsBlob"></a>

```csharp
public string CapacityRequestsBlob { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `PeriodValue`<sup>Required</sup> <a name="PeriodValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.periodValue"></a>

```csharp
public string PeriodValue { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `TotalAvailable`<sup>Required</sup> <a name="TotalAvailable" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalAvailable"></a>

```csharp
public string TotalAvailable { get; }
```

- *Type:* string

---

##### `TotalCancelled`<sup>Required</sup> <a name="TotalCancelled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalCancelled"></a>

```csharp
public string TotalCancelled { get; }
```

- *Type:* string

---

##### `TotalDemanded`<sup>Required</sup> <a name="TotalDemanded" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalDemanded"></a>

```csharp
public string TotalDemanded { get; }
```

- *Type:* string

---

##### `TotalRejected`<sup>Required</sup> <a name="TotalRejected" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalRejected"></a>

```csharp
public string TotalRejected { get; }
```

- *Type:* string

---

##### `TotalSupplied`<sup>Required</sup> <a name="TotalSupplied" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalSupplied"></a>

```csharp
public string TotalSupplied { get; }
```

- *Type:* string

---

##### `TotalUnfulfilled`<sup>Required</sup> <a name="TotalUnfulfilled" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.totalUnfulfilled"></a>

```csharp
public string TotalUnfulfilled { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `WorkloadTypeBreakdownBlob`<sup>Required</sup> <a name="WorkloadTypeBreakdownBlob" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.workloadTypeBreakdownBlob"></a>

```csharp
public string WorkloadTypeBreakdownBlob { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItems</a>

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get"></a>

```csharp
private DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference <a name="DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.items"></a>

```csharp
public DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementNamespaceOccOverviews.DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection">DataOciCapacityManagementNamespaceOccOverviewsOccOverviewCollection</a>

---



