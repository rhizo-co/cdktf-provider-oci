# `dataOciCoreVirtualCircuitPublicPrefixes` Submodule <a name="`dataOciCoreVirtualCircuitPublicPrefixes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitPublicPrefixesA <a name="DataOciCoreVirtualCircuitPublicPrefixesA" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes oci_core_virtual_circuit_public_prefixes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA(scope: Construct, id: string, config: DataOciCoreVirtualCircuitPublicPrefixesAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig">DataOciCoreVirtualCircuitPublicPrefixesAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig">DataOciCoreVirtualCircuitPublicPrefixesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetVerificationState">resetVerificationState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreVirtualCircuitPublicPrefixesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVerificationState` <a name="resetVerificationState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.resetVerificationState"></a>

```typescript
public resetVerificationState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitPublicPrefixesA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitPublicPrefixesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVirtualCircuitPublicPrefixesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVirtualCircuitPublicPrefixesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitPublicPrefixesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList">DataOciCoreVirtualCircuitPublicPrefixesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitPublicPrefixes">virtualCircuitPublicPrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationStateInput">verificationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitIdInput">virtualCircuitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationState">verificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitId">virtualCircuitId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filter"></a>

```typescript
public readonly filter: DataOciCoreVirtualCircuitPublicPrefixesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList">DataOciCoreVirtualCircuitPublicPrefixesFilterList</a>

---

##### `virtualCircuitPublicPrefixes`<sup>Required</sup> <a name="virtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitPublicPrefixes"></a>

```typescript
public readonly virtualCircuitPublicPrefixes: DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreVirtualCircuitPublicPrefixesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `verificationStateInput`<sup>Optional</sup> <a name="verificationStateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationStateInput"></a>

```typescript
public readonly verificationStateInput: string;
```

- *Type:* string

---

##### `virtualCircuitIdInput`<sup>Optional</sup> <a name="virtualCircuitIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitIdInput"></a>

```typescript
public readonly virtualCircuitIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `verificationState`<sup>Required</sup> <a name="verificationState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.verificationState"></a>

```typescript
public readonly verificationState: string;
```

- *Type:* string

---

##### `virtualCircuitId`<sup>Required</sup> <a name="virtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.virtualCircuitId"></a>

```typescript
public readonly virtualCircuitId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitPublicPrefixesAConfig <a name="DataOciCoreVirtualCircuitPublicPrefixesAConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitPublicPrefixesAConfig: dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.virtualCircuitId">virtualCircuitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.verificationState">verificationState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `virtualCircuitId`<sup>Required</sup> <a name="virtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.virtualCircuitId"></a>

```typescript
public readonly virtualCircuitId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreVirtualCircuitPublicPrefixesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#filter DataOciCoreVirtualCircuitPublicPrefixesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `verificationState`<sup>Optional</sup> <a name="verificationState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesAConfig.property.verificationState"></a>

```typescript
public readonly verificationState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}.

---

### DataOciCoreVirtualCircuitPublicPrefixesFilter <a name="DataOciCoreVirtualCircuitPublicPrefixesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitPublicPrefixesFilter: dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#name DataOciCoreVirtualCircuitPublicPrefixesA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#values DataOciCoreVirtualCircuitPublicPrefixesA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#regex DataOciCoreVirtualCircuitPublicPrefixesA#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#name DataOciCoreVirtualCircuitPublicPrefixesA#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#values DataOciCoreVirtualCircuitPublicPrefixesA#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_public_prefixes#regex DataOciCoreVirtualCircuitPublicPrefixesA#regex}.

---

### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes: dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitPublicPrefixesFilterList <a name="DataOciCoreVirtualCircuitPublicPrefixesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVirtualCircuitPublicPrefixesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>[]

---


### DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference <a name="DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVirtualCircuitPublicPrefixesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesFilter">DataOciCoreVirtualCircuitPublicPrefixesFilter</a>

---


### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference <a name="DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitPublicPrefixes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.verificationState">verificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `verificationState`<sup>Required</sup> <a name="verificationState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.verificationState"></a>

```typescript
public readonly verificationState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitPublicPrefixes.DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes">DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes</a>

---



