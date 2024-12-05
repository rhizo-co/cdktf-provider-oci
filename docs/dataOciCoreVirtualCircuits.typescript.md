# `dataOciCoreVirtualCircuits` Submodule <a name="`dataOciCoreVirtualCircuits` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuits <a name="DataOciCoreVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits oci_core_virtual_circuits}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits(scope: Construct, id: string, config: DataOciCoreVirtualCircuitsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig">DataOciCoreVirtualCircuitsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig">DataOciCoreVirtualCircuitsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreVirtualCircuitsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuits resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVirtualCircuits to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVirtualCircuits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList">DataOciCoreVirtualCircuitsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.virtualCircuits">virtualCircuits</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList">DataOciCoreVirtualCircuitsVirtualCircuitsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filter"></a>

```typescript
public readonly filter: DataOciCoreVirtualCircuitsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList">DataOciCoreVirtualCircuitsFilterList</a>

---

##### `virtualCircuits`<sup>Required</sup> <a name="virtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.virtualCircuits"></a>

```typescript
public readonly virtualCircuits: DataOciCoreVirtualCircuitsVirtualCircuitsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList">DataOciCoreVirtualCircuitsVirtualCircuitsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreVirtualCircuitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitsConfig <a name="DataOciCoreVirtualCircuitsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitsConfig: dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreVirtualCircuitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#filter DataOciCoreVirtualCircuits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}.

---

### DataOciCoreVirtualCircuitsFilter <a name="DataOciCoreVirtualCircuitsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitsFilter: dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#name DataOciCoreVirtualCircuits#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#values DataOciCoreVirtualCircuits#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#regex DataOciCoreVirtualCircuits#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#name DataOciCoreVirtualCircuits#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#values DataOciCoreVirtualCircuits#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#regex DataOciCoreVirtualCircuits#regex}.

---

### DataOciCoreVirtualCircuitsVirtualCircuits <a name="DataOciCoreVirtualCircuitsVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitsVirtualCircuits: dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits = { ... }
```


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings: dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings = { ... }
```


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes: dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes = { ... }
```


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata: dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitsFilterList <a name="DataOciCoreVirtualCircuitsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVirtualCircuitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>[]

---


### DataOciCoreVirtualCircuitsFilterOutputReference <a name="DataOciCoreVirtualCircuitsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVirtualCircuitsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter">DataOciCoreVirtualCircuitsFilter</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">bgpMd5AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">crossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">customerBgpPeeringIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">customerBgpPeeringIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">oracleBgpPeeringIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">oracleBgpPeeringIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpMd5AuthKey`<sup>Required</sup> <a name="bgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```typescript
public readonly bgpMd5AuthKey: string;
```

- *Type:* string

---

##### `crossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="crossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```typescript
public readonly crossConnectOrCrossConnectGroupId: string;
```

- *Type:* string

---

##### `customerBgpPeeringIp`<sup>Required</sup> <a name="customerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```typescript
public readonly customerBgpPeeringIp: string;
```

- *Type:* string

---

##### `customerBgpPeeringIpv6`<sup>Required</sup> <a name="customerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```typescript
public readonly customerBgpPeeringIpv6: string;
```

- *Type:* string

---

##### `oracleBgpPeeringIp`<sup>Required</sup> <a name="oracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```typescript
public readonly oracleBgpPeeringIp: string;
```

- *Type:* string

---

##### `oracleBgpPeeringIpv6`<sup>Required</sup> <a name="oracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```typescript
public readonly oracleBgpPeeringIpv6: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bandwidthShapeName">bandwidthShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpAdminState">bgpAdminState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpIpv6SessionState">bgpIpv6SessionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpManagement">bgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpSessionState">bgpSessionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.crossConnectMappings">crossConnectMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerAsn">customerAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerBgpAsn">customerBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.ipMtu">ipMtu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isBfdEnabled">isBfdEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isTransportMode">isTransportMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.oracleBgpAsn">oracleBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceKeyName">providerServiceKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerState">providerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.publicPrefixes">publicPrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.referenceComment">referenceComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.routingPolicy">routingPolicy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitId">virtualCircuitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitRedundancyMetadata">virtualCircuitRedundancyMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits">DataOciCoreVirtualCircuitsVirtualCircuits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthShapeName`<sup>Required</sup> <a name="bandwidthShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bandwidthShapeName"></a>

```typescript
public readonly bandwidthShapeName: string;
```

- *Type:* string

---

##### `bgpAdminState`<sup>Required</sup> <a name="bgpAdminState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpAdminState"></a>

```typescript
public readonly bgpAdminState: string;
```

- *Type:* string

---

##### `bgpIpv6SessionState`<sup>Required</sup> <a name="bgpIpv6SessionState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpIpv6SessionState"></a>

```typescript
public readonly bgpIpv6SessionState: string;
```

- *Type:* string

---

##### `bgpManagement`<sup>Required</sup> <a name="bgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpManagement"></a>

```typescript
public readonly bgpManagement: string;
```

- *Type:* string

---

##### `bgpSessionState`<sup>Required</sup> <a name="bgpSessionState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpSessionState"></a>

```typescript
public readonly bgpSessionState: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `crossConnectMappings`<sup>Required</sup> <a name="crossConnectMappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.crossConnectMappings"></a>

```typescript
public readonly crossConnectMappings: DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList</a>

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerAsn"></a>

```typescript
public readonly customerAsn: string;
```

- *Type:* string

---

##### `customerBgpAsn`<sup>Required</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerBgpAsn"></a>

```typescript
public readonly customerBgpAsn: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipMtu`<sup>Required</sup> <a name="ipMtu" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.ipMtu"></a>

```typescript
public readonly ipMtu: string;
```

- *Type:* string

---

##### `isBfdEnabled`<sup>Required</sup> <a name="isBfdEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isBfdEnabled"></a>

```typescript
public readonly isBfdEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTransportMode`<sup>Required</sup> <a name="isTransportMode" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isTransportMode"></a>

```typescript
public readonly isTransportMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `oracleBgpAsn`<sup>Required</sup> <a name="oracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.oracleBgpAsn"></a>

```typescript
public readonly oracleBgpAsn: number;
```

- *Type:* number

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

---

##### `providerServiceKeyName`<sup>Required</sup> <a name="providerServiceKeyName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceKeyName"></a>

```typescript
public readonly providerServiceKeyName: string;
```

- *Type:* string

---

##### `providerState`<sup>Required</sup> <a name="providerState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerState"></a>

```typescript
public readonly providerState: string;
```

- *Type:* string

---

##### `publicPrefixes`<sup>Required</sup> <a name="publicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.publicPrefixes"></a>

```typescript
public readonly publicPrefixes: DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList</a>

---

##### `referenceComment`<sup>Required</sup> <a name="referenceComment" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.referenceComment"></a>

```typescript
public readonly referenceComment: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routingPolicy`<sup>Required</sup> <a name="routingPolicy" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: string[];
```

- *Type:* string[]

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `virtualCircuitId`<sup>Required</sup> <a name="virtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitId"></a>

```typescript
public readonly virtualCircuitId: string;
```

- *Type:* string

---

##### `virtualCircuitRedundancyMetadata`<sup>Required</sup> <a name="virtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitRedundancyMetadata"></a>

```typescript
public readonly virtualCircuitRedundancyMetadata: DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVirtualCircuitsVirtualCircuits;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits">DataOciCoreVirtualCircuitsVirtualCircuits</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuits } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">configuredRedundancyLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">ipv4BgpSessionRedundancyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">ipv6BgpSessionRedundancyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuredRedundancyLevel`<sup>Required</sup> <a name="configuredRedundancyLevel" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```typescript
public readonly configuredRedundancyLevel: string;
```

- *Type:* string

---

##### `ipv4BgpSessionRedundancyStatus`<sup>Required</sup> <a name="ipv4BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```typescript
public readonly ipv4BgpSessionRedundancyStatus: string;
```

- *Type:* string

---

##### `ipv6BgpSessionRedundancyStatus`<sup>Required</sup> <a name="ipv6BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```typescript
public readonly ipv6BgpSessionRedundancyStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata</a>

---



