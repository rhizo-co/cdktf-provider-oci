# `dataOciCoreIpInventoryVcnOverlaps` Submodule <a name="`dataOciCoreIpInventoryVcnOverlaps` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventoryVcnOverlaps <a name="DataOciCoreIpInventoryVcnOverlaps" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps oci_core_ip_inventory_vcn_overlaps}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps(scope: Construct, id: string, config: DataOciCoreIpInventoryVcnOverlapsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig">DataOciCoreIpInventoryVcnOverlapsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig">DataOciCoreIpInventoryVcnOverlapsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreIpInventoryVcnOverlapsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpInventoryVcnOverlaps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpInventoryVcnOverlaps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventoryVcnOverlaps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary">ipInventoryVcnOverlapSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount">overlapCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput">compartmentListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput">regionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList">compartmentList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList">regionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter"></a>

```typescript
public readonly filter: DataOciCoreIpInventoryVcnOverlapsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a>

---

##### `ipInventoryVcnOverlapSummary`<sup>Required</sup> <a name="ipInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary"></a>

```typescript
public readonly ipInventoryVcnOverlapSummary: DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a>

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `overlapCount`<sup>Required</sup> <a name="overlapCount" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount"></a>

```typescript
public readonly overlapCount: number;
```

- *Type:* number

---

##### `compartmentListInput`<sup>Optional</sup> <a name="compartmentListInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput"></a>

```typescript
public readonly compartmentListInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreIpInventoryVcnOverlapsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput"></a>

```typescript
public readonly regionListInput: string[];
```

- *Type:* string[]

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentList`<sup>Required</sup> <a name="compartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList"></a>

```typescript
public readonly compartmentList: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList"></a>

```typescript
public readonly regionList: string[];
```

- *Type:* string[]

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventoryVcnOverlapsConfig <a name="DataOciCoreIpInventoryVcnOverlapsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.Initializer"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpInventoryVcnOverlapsConfig: dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList">compartmentList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList">regionList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentList`<sup>Required</sup> <a name="compartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList"></a>

```typescript
public readonly compartmentList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}.

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList"></a>

```typescript
public readonly regionList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreIpInventoryVcnOverlapsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#filter DataOciCoreIpInventoryVcnOverlaps#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventoryVcnOverlapsFilter <a name="DataOciCoreIpInventoryVcnOverlapsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.Initializer"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpInventoryVcnOverlapsFilter: dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}.

---

### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary.Initializer"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary: dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventoryVcnOverlapsFilterList <a name="DataOciCoreIpInventoryVcnOverlapsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreIpInventoryVcnOverlapsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreIpInventoryVcnOverlapsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>[]

---


### DataOciCoreIpInventoryVcnOverlapsFilterOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreIpInventoryVcnOverlapsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get"></a>

```typescript
public get(index: number): DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpInventoryVcnOverlaps } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr">overlappingCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId">overlappingVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName">overlappingVcnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `overlappingCidr`<sup>Required</sup> <a name="overlappingCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr"></a>

```typescript
public readonly overlappingCidr: string;
```

- *Type:* string

---

##### `overlappingVcnId`<sup>Required</sup> <a name="overlappingVcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId"></a>

```typescript
public readonly overlappingVcnId: string;
```

- *Type:* string

---

##### `overlappingVcnName`<sup>Required</sup> <a name="overlappingVcnName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName"></a>

```typescript
public readonly overlappingVcnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a>

---



