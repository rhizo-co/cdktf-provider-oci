# `dataOciFleetSoftwareUpdateFsuCycles` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCycles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCycles <a name="DataOciFleetSoftwareUpdateFsuCycles" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles oci_fleet_software_update_fsu_cycles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles(scope: Construct, id: string, config: DataOciFleetSoftwareUpdateFsuCyclesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig">DataOciFleetSoftwareUpdateFsuCyclesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig">DataOciFleetSoftwareUpdateFsuCyclesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetCollectionType">resetCollectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFsuCollectionId">resetFsuCollectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetTargetVersion">resetTargetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFleetSoftwareUpdateFsuCyclesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a>[]

---

##### `resetCollectionType` <a name="resetCollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetCollectionType"></a>

```typescript
public resetCollectionType(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFsuCollectionId` <a name="resetFsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFsuCollectionId"></a>

```typescript
public resetFsuCollectionId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetVersion` <a name="resetTargetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetTargetVersion"></a>

```typescript
public resetTargetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCycles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetSoftwareUpdateFsuCycles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCycles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList">DataOciFleetSoftwareUpdateFsuCyclesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCycleSummaryCollection">fsuCycleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionTypeInput">collectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionIdInput">fsuCollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersionInput">targetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionType">collectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionId">fsuCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filter"></a>

```typescript
public readonly filter: DataOciFleetSoftwareUpdateFsuCyclesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList">DataOciFleetSoftwareUpdateFsuCyclesFilterList</a>

---

##### `fsuCycleSummaryCollection`<sup>Required</sup> <a name="fsuCycleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCycleSummaryCollection"></a>

```typescript
public readonly fsuCycleSummaryCollection: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList</a>

---

##### `collectionTypeInput`<sup>Optional</sup> <a name="collectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionTypeInput"></a>

```typescript
public readonly collectionTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFleetSoftwareUpdateFsuCyclesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a>[]

---

##### `fsuCollectionIdInput`<sup>Optional</sup> <a name="fsuCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionIdInput"></a>

```typescript
public readonly fsuCollectionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersionInput"></a>

```typescript
public readonly targetVersionInput: string;
```

- *Type:* string

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionType"></a>

```typescript
public readonly collectionType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fsuCollectionId`<sup>Required</sup> <a name="fsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionId"></a>

```typescript
public readonly fsuCollectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCyclesConfig <a name="DataOciFleetSoftwareUpdateFsuCyclesConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesConfig: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#compartment_id DataOciFleetSoftwareUpdateFsuCycles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.collectionType">collectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#collection_type DataOciFleetSoftwareUpdateFsuCycles#collection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#display_name DataOciFleetSoftwareUpdateFsuCycles#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.fsuCollectionId">fsuCollectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#fsu_collection_id DataOciFleetSoftwareUpdateFsuCycles#fsu_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#id DataOciFleetSoftwareUpdateFsuCycles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#state DataOciFleetSoftwareUpdateFsuCycles#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.targetVersion">targetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#target_version DataOciFleetSoftwareUpdateFsuCycles#target_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#compartment_id DataOciFleetSoftwareUpdateFsuCycles#compartment_id}.

---

##### `collectionType`<sup>Optional</sup> <a name="collectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.collectionType"></a>

```typescript
public readonly collectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#collection_type DataOciFleetSoftwareUpdateFsuCycles#collection_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#display_name DataOciFleetSoftwareUpdateFsuCycles#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFleetSoftwareUpdateFsuCyclesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#filter DataOciFleetSoftwareUpdateFsuCycles#filter}

---

##### `fsuCollectionId`<sup>Optional</sup> <a name="fsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.fsuCollectionId"></a>

```typescript
public readonly fsuCollectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#fsu_collection_id DataOciFleetSoftwareUpdateFsuCycles#fsu_collection_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#id DataOciFleetSoftwareUpdateFsuCycles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#state DataOciFleetSoftwareUpdateFsuCycles#state}.

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#target_version DataOciFleetSoftwareUpdateFsuCycles#target_version}.

---

### DataOciFleetSoftwareUpdateFsuCyclesFilter <a name="DataOciFleetSoftwareUpdateFsuCyclesFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFilter: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#name DataOciFleetSoftwareUpdateFsuCycles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#values DataOciFleetSoftwareUpdateFsuCycles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#regex DataOciFleetSoftwareUpdateFsuCycles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#name DataOciFleetSoftwareUpdateFsuCycles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#values DataOciFleetSoftwareUpdateFsuCycles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#regex DataOciFleetSoftwareUpdateFsuCycles#regex}.

---

### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection = { ... }
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems = { ... }
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule = { ... }
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy = { ... }
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection = { ... }
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails = { ... }
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute = { ... }
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule: dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCyclesFilterList <a name="DataOciFleetSoftwareUpdateFsuCyclesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetSoftwareUpdateFsuCyclesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a>[]

---


### DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetSoftwareUpdateFsuCyclesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter">DataOciFleetSoftwareUpdateFsuCyclesFilter</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.timeToStart">timeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.timeToStart"></a>

```typescript
public readonly timeToStart: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isForceRolling">isForceRolling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isWaitForBatchResume">isWaitForBatchResume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isForceRolling`<sup>Required</sup> <a name="isForceRolling" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isForceRolling"></a>

```typescript
public readonly isForceRolling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isWaitForBatchResume`<sup>Required</sup> <a name="isWaitForBatchResume" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isWaitForBatchResume"></a>

```typescript
public readonly isWaitForBatchResume: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.logCollectionMode">logCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logCollectionMode`<sup>Required</sup> <a name="logCollectionMode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.logCollectionMode"></a>

```typescript
public readonly logCollectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.homePolicy">homePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.newHomePrefix">newHomePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.softwareImageId">softwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `homePolicy`<sup>Required</sup> <a name="homePolicy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.homePolicy"></a>

```typescript
public readonly homePolicy: string;
```

- *Type:* string

---

##### `newHomePrefix`<sup>Required</sup> <a name="newHomePrefix" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.newHomePrefix"></a>

```typescript
public readonly newHomePrefix: string;
```

- *Type:* string

---

##### `softwareImageId`<sup>Required</sup> <a name="softwareImageId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.softwareImageId"></a>

```typescript
public readonly softwareImageId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.timeToStart">timeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.timeToStart"></a>

```typescript
public readonly timeToStart: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.applyActionSchedule">applyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.batchingStrategy">batchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.collectionType">collectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.diagnosticsCollection">diagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.executingFsuActionId">executingFsuActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fsuCollectionId">fsuCollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.goalVersionDetails">goalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnoreMissingPatches">isIgnoreMissingPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnorePatches">isIgnorePatches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isKeepPlacement">isKeepPlacement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lastCompletedAction">lastCompletedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.maxDrainTimeoutInSeconds">maxDrainTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.nextActionToExecute">nextActionToExecute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.stageActionSchedule">stageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyActionSchedule`<sup>Required</sup> <a name="applyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.applyActionSchedule"></a>

```typescript
public readonly applyActionSchedule: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList</a>

---

##### `batchingStrategy`<sup>Required</sup> <a name="batchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.batchingStrategy"></a>

```typescript
public readonly batchingStrategy: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList</a>

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.collectionType"></a>

```typescript
public readonly collectionType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `diagnosticsCollection`<sup>Required</sup> <a name="diagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.diagnosticsCollection"></a>

```typescript
public readonly diagnosticsCollection: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executingFsuActionId`<sup>Required</sup> <a name="executingFsuActionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.executingFsuActionId"></a>

```typescript
public readonly executingFsuActionId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `fsuCollectionId`<sup>Required</sup> <a name="fsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fsuCollectionId"></a>

```typescript
public readonly fsuCollectionId: string;
```

- *Type:* string

---

##### `goalVersionDetails`<sup>Required</sup> <a name="goalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.goalVersionDetails"></a>

```typescript
public readonly goalVersionDetails: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIgnoreMissingPatches`<sup>Required</sup> <a name="isIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnoreMissingPatches"></a>

```typescript
public readonly isIgnoreMissingPatches: string[];
```

- *Type:* string[]

---

##### `isIgnorePatches`<sup>Required</sup> <a name="isIgnorePatches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnorePatches"></a>

```typescript
public readonly isIgnorePatches: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isKeepPlacement`<sup>Required</sup> <a name="isKeepPlacement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isKeepPlacement"></a>

```typescript
public readonly isKeepPlacement: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastCompletedAction`<sup>Required</sup> <a name="lastCompletedAction" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lastCompletedAction"></a>

```typescript
public readonly lastCompletedAction: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maxDrainTimeoutInSeconds`<sup>Required</sup> <a name="maxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.maxDrainTimeoutInSeconds"></a>

```typescript
public readonly maxDrainTimeoutInSeconds: number;
```

- *Type:* number

---

##### `nextActionToExecute`<sup>Required</sup> <a name="nextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.nextActionToExecute"></a>

```typescript
public readonly nextActionToExecute: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList</a>

---

##### `stageActionSchedule`<sup>Required</sup> <a name="stageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.stageActionSchedule"></a>

```typescript
public readonly stageActionSchedule: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.timeToStart">timeToStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.timeToStart"></a>

```typescript
public readonly timeToStart: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetSoftwareUpdateFsuCycles } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection</a>

---



