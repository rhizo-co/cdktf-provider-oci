# `dataOciOpsiOperationsInsightsWarehouses` Submodule <a name="`dataOciOpsiOperationsInsightsWarehouses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsWarehouses <a name="DataOciOpsiOperationsInsightsWarehouses" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses oci_opsi_operations_insights_warehouses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses(scope: Construct, id: string, config?: DataOciOpsiOperationsInsightsWarehousesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig">DataOciOpsiOperationsInsightsWarehousesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig">DataOciOpsiOperationsInsightsWarehousesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOpsiOperationsInsightsWarehousesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouses resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isConstruct"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformElement"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOperationsInsightsWarehouses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList">DataOciOpsiOperationsInsightsWarehousesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.operationsInsightsWarehouseSummaryCollection">operationsInsightsWarehouseSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.state">state</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.filter"></a>

```typescript
public readonly filter: DataOciOpsiOperationsInsightsWarehousesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList">DataOciOpsiOperationsInsightsWarehousesFilterList</a>

---

##### `operationsInsightsWarehouseSummaryCollection`<sup>Required</sup> <a name="operationsInsightsWarehouseSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.operationsInsightsWarehouseSummaryCollection"></a>

```typescript
public readonly operationsInsightsWarehouseSummaryCollection: DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOpsiOperationsInsightsWarehousesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsWarehousesConfig <a name="DataOciOpsiOperationsInsightsWarehousesConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehousesConfig: dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#compartment_id DataOciOpsiOperationsInsightsWarehouses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#display_name DataOciOpsiOperationsInsightsWarehouses#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#id DataOciOpsiOperationsInsightsWarehouses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#state DataOciOpsiOperationsInsightsWarehouses#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#compartment_id DataOciOpsiOperationsInsightsWarehouses#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#display_name DataOciOpsiOperationsInsightsWarehouses#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOpsiOperationsInsightsWarehousesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#filter DataOciOpsiOperationsInsightsWarehouses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#id DataOciOpsiOperationsInsightsWarehouses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#state DataOciOpsiOperationsInsightsWarehouses#state}.

---

### DataOciOpsiOperationsInsightsWarehousesFilter <a name="DataOciOpsiOperationsInsightsWarehousesFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehousesFilter: dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#name DataOciOpsiOperationsInsightsWarehouses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#values DataOciOpsiOperationsInsightsWarehouses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#regex DataOciOpsiOperationsInsightsWarehouses#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#name DataOciOpsiOperationsInsightsWarehouses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#values DataOciOpsiOperationsInsightsWarehouses#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#regex DataOciOpsiOperationsInsightsWarehouses#regex}.

---

### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection: dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection = { ... }
```


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems: dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOperationsInsightsWarehousesFilterList <a name="DataOciOpsiOperationsInsightsWarehousesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsWarehousesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiOperationsInsightsWarehousesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>[]

---


### DataOciOpsiOperationsInsightsWarehousesFilterOutputReference <a name="DataOciOpsiOperationsInsightsWarehousesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOpsiOperationsInsightsWarehousesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>

---


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.cpuAllocated">cpuAllocated</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.cpuUsed">cpuUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.dynamicGroupId">dynamicGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.operationsInsightsTenancyId">operationsInsightsTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.storageAllocatedInGbs">storageAllocatedInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.storageUsedInGbs">storageUsedInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeLastWalletRotated">timeLastWalletRotated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuAllocated`<sup>Required</sup> <a name="cpuAllocated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.cpuAllocated"></a>

```typescript
public readonly cpuAllocated: number;
```

- *Type:* number

---

##### `cpuUsed`<sup>Required</sup> <a name="cpuUsed" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.cpuUsed"></a>

```typescript
public readonly cpuUsed: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dynamicGroupId`<sup>Required</sup> <a name="dynamicGroupId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.dynamicGroupId"></a>

```typescript
public readonly dynamicGroupId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `operationsInsightsTenancyId`<sup>Required</sup> <a name="operationsInsightsTenancyId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.operationsInsightsTenancyId"></a>

```typescript
public readonly operationsInsightsTenancyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageAllocatedInGbs`<sup>Required</sup> <a name="storageAllocatedInGbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.storageAllocatedInGbs"></a>

```typescript
public readonly storageAllocatedInGbs: number;
```

- *Type:* number

---

##### `storageUsedInGbs`<sup>Required</sup> <a name="storageUsedInGbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.storageUsedInGbs"></a>

```typescript
public readonly storageUsedInGbs: number;
```

- *Type:* number

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastWalletRotated`<sup>Required</sup> <a name="timeLastWalletRotated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeLastWalletRotated"></a>

```typescript
public readonly timeLastWalletRotated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems</a>

---


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouses } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection</a>

---



