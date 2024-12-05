# `dataOciDemandSignalOccDemandSignals` Submodule <a name="`dataOciDemandSignalOccDemandSignals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDemandSignalOccDemandSignals <a name="DataOciDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals oci_demand_signal_occ_demand_signals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals(scope: Construct, id: string, config?: DataOciDemandSignalOccDemandSignalsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig">DataOciDemandSignalOccDemandSignalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig">DataOciDemandSignalOccDemandSignalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDemandSignalOccDemandSignalsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignals resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDemandSignalOccDemandSignals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDemandSignalOccDemandSignals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDemandSignalOccDemandSignals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDemandSignalOccDemandSignals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList">DataOciDemandSignalOccDemandSignalsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.occDemandSignalCollection">occDemandSignalCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filter"></a>

```typescript
public readonly filter: DataOciDemandSignalOccDemandSignalsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList">DataOciDemandSignalOccDemandSignalsFilterList</a>

---

##### `occDemandSignalCollection`<sup>Required</sup> <a name="occDemandSignalCollection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.occDemandSignalCollection"></a>

```typescript
public readonly occDemandSignalCollection: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDemandSignalOccDemandSignalsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignals.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDemandSignalOccDemandSignalsConfig <a name="DataOciDemandSignalOccDemandSignalsConfig" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

const dataOciDemandSignalOccDemandSignalsConfig: dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#compartment_id DataOciDemandSignalOccDemandSignals#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#display_name DataOciDemandSignalOccDemandSignals#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDemandSignalOccDemandSignalsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#filter DataOciDemandSignalOccDemandSignals#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#id DataOciDemandSignalOccDemandSignals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#state DataOciDemandSignalOccDemandSignals#state}.

---

### DataOciDemandSignalOccDemandSignalsFilter <a name="DataOciDemandSignalOccDemandSignalsFilter" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

const dataOciDemandSignalOccDemandSignalsFilter: dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#name DataOciDemandSignalOccDemandSignals#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#values DataOciDemandSignalOccDemandSignals#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#regex DataOciDemandSignalOccDemandSignals#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#name DataOciDemandSignalOccDemandSignals#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#values DataOciDemandSignalOccDemandSignals#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/demand_signal_occ_demand_signals#regex DataOciDemandSignalOccDemandSignals#regex}.

---

### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

const dataOciDemandSignalOccDemandSignalsOccDemandSignalCollection: dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection = { ... }
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

const dataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems: dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems = { ... }
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

const dataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals: dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals = { ... }
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

const dataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues: dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues = { ... }
```


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

const dataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations: dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDemandSignalOccDemandSignalsFilterList <a name="DataOciDemandSignalOccDemandSignalsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get"></a>

```typescript
public get(index: number): DataOciDemandSignalOccDemandSignalsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDemandSignalOccDemandSignalsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>[]

---


### DataOciDemandSignalOccDemandSignalsFilterOutputReference <a name="DataOciDemandSignalOccDemandSignalsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDemandSignalOccDemandSignalsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsFilter">DataOciDemandSignalOccDemandSignalsFilter</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get"></a>

```typescript
public get(index: number): DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.values"></a>

```typescript
public readonly values: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignals</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get"></a>

```typescript
public get(index: number): DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.timeExpected">timeExpected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comments`<sup>Required</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `timeExpected`<sup>Required</sup> <a name="timeExpected" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```typescript
public readonly timeExpected: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsValues</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.isActive">isActive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignalId">occDemandSignalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignals">occDemandSignals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `occDemandSignalId`<sup>Required</sup> <a name="occDemandSignalId" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignalId"></a>

```typescript
public readonly occDemandSignalId: string;
```

- *Type:* string

---

##### `occDemandSignals`<sup>Required</sup> <a name="occDemandSignals" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.occDemandSignals"></a>

```typescript
public readonly occDemandSignals: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOccDemandSignalsList</a>

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.patchOperations"></a>

```typescript
public readonly patchOperations: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItems</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get"></a>

```typescript
public get(index: number): DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.position">position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selection">selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.value">value</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.value"></a>

```typescript
public readonly value: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsPatchOperations</a>

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get"></a>

```typescript
public get(index: number): DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference <a name="DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDemandSignalOccDemandSignals } from 'rhizo-co-terraform-provider-oci'

new dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDemandSignalOccDemandSignals.DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection">DataOciDemandSignalOccDemandSignalsOccDemandSignalCollection</a>

---



