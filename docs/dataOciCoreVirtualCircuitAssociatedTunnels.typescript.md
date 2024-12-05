# `dataOciCoreVirtualCircuitAssociatedTunnels` Submodule <a name="`dataOciCoreVirtualCircuitAssociatedTunnels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitAssociatedTunnels <a name="DataOciCoreVirtualCircuitAssociatedTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels oci_core_virtual_circuit_associated_tunnels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels(scope: Construct, id: string, config: DataOciCoreVirtualCircuitAssociatedTunnelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig">DataOciCoreVirtualCircuitAssociatedTunnelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig">DataOciCoreVirtualCircuitAssociatedTunnelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreVirtualCircuitAssociatedTunnelsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitAssociatedTunnels resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitAssociatedTunnels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVirtualCircuitAssociatedTunnels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVirtualCircuitAssociatedTunnels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitAssociatedTunnels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList">DataOciCoreVirtualCircuitAssociatedTunnelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitAssociatedTunnelDetails">virtualCircuitAssociatedTunnelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitIdInput">virtualCircuitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitId">virtualCircuitId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filter"></a>

```typescript
public readonly filter: DataOciCoreVirtualCircuitAssociatedTunnelsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList">DataOciCoreVirtualCircuitAssociatedTunnelsFilterList</a>

---

##### `virtualCircuitAssociatedTunnelDetails`<sup>Required</sup> <a name="virtualCircuitAssociatedTunnelDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitAssociatedTunnelDetails"></a>

```typescript
public readonly virtualCircuitAssociatedTunnelDetails: DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreVirtualCircuitAssociatedTunnelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `virtualCircuitIdInput`<sup>Optional</sup> <a name="virtualCircuitIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitIdInput"></a>

```typescript
public readonly virtualCircuitIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `virtualCircuitId`<sup>Required</sup> <a name="virtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitId"></a>

```typescript
public readonly virtualCircuitId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitAssociatedTunnelsConfig <a name="DataOciCoreVirtualCircuitAssociatedTunnelsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitAssociatedTunnelsConfig: dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.virtualCircuitId">virtualCircuitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `virtualCircuitId`<sup>Required</sup> <a name="virtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.virtualCircuitId"></a>

```typescript
public readonly virtualCircuitId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreVirtualCircuitAssociatedTunnelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#filter DataOciCoreVirtualCircuitAssociatedTunnels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVirtualCircuitAssociatedTunnelsFilter <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitAssociatedTunnelsFilter: dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#name DataOciCoreVirtualCircuitAssociatedTunnels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#values DataOciCoreVirtualCircuitAssociatedTunnels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#regex DataOciCoreVirtualCircuitAssociatedTunnels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#name DataOciCoreVirtualCircuitAssociatedTunnels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#values DataOciCoreVirtualCircuitAssociatedTunnels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#regex DataOciCoreVirtualCircuitAssociatedTunnels#regex}.

---

### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails: dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitAssociatedTunnelsFilterList <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVirtualCircuitAssociatedTunnelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>[]

---


### DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVirtualCircuitAssociatedTunnelsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter">DataOciCoreVirtualCircuitAssociatedTunnelsFilter</a>

---


### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitAssociatedTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.ipsecConnectionId">ipsecConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelType">tunnelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipsecConnectionId`<sup>Required</sup> <a name="ipsecConnectionId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.ipsecConnectionId"></a>

```typescript
public readonly ipsecConnectionId: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `tunnelType`<sup>Required</sup> <a name="tunnelType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelType"></a>

```typescript
public readonly tunnelType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails</a>

---



