# `dataOciCoreIpsecConnectionTunnels` Submodule <a name="`dataOciCoreIpsecConnectionTunnels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnels <a name="DataOciCoreIpsecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels oci_core_ipsec_connection_tunnels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels(scope: Construct, id: string, config: DataOciCoreIpsecConnectionTunnelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig">DataOciCoreIpsecConnectionTunnelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig">DataOciCoreIpsecConnectionTunnelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreIpsecConnectionTunnelsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpsecConnectionTunnels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList">DataOciCoreIpsecConnectionTunnelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipSecConnectionTunnels">ipSecConnectionTunnels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecIdInput">ipsecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecId">ipsecId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filter"></a>

```typescript
public readonly filter: DataOciCoreIpsecConnectionTunnelsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList">DataOciCoreIpsecConnectionTunnelsFilterList</a>

---

##### `ipSecConnectionTunnels`<sup>Required</sup> <a name="ipSecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipSecConnectionTunnels"></a>

```typescript
public readonly ipSecConnectionTunnels: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreIpsecConnectionTunnelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipsecIdInput`<sup>Optional</sup> <a name="ipsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecIdInput"></a>

```typescript
public readonly ipsecIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelsConfig <a name="DataOciCoreIpsecConnectionTunnelsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelsConfig: dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.ipsecId">ipsecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreIpsecConnectionTunnelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#filter DataOciCoreIpsecConnectionTunnels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecConnectionTunnelsFilter <a name="DataOciCoreIpsecConnectionTunnelsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelsFilter: dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}.

---

### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels: dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels = { ... }
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo: dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo = { ... }
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig: dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig = { ... }
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig: dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig = { ... }
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails: dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails = { ... }
```


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails: dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelsFilterList <a name="DataOciCoreIpsecConnectionTunnelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreIpsecConnectionTunnelsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>[]

---


### DataOciCoreIpsecConnectionTunnelsFilterOutputReference <a name="DataOciCoreIpsecConnectionTunnelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreIpsecConnectionTunnelsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsFilter">DataOciCoreIpsecConnectionTunnelsFilter</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpIpv6State">bgpIpv6State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpState">bgpState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerBgpAsn">customerBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIp">customerInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIpv6">customerInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleBgpAsn">oracleBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIp">oracleInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">oracleInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpIpv6State`<sup>Required</sup> <a name="bgpIpv6State" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```typescript
public readonly bgpIpv6State: string;
```

- *Type:* string

---

##### `bgpState`<sup>Required</sup> <a name="bgpState" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.bgpState"></a>

```typescript
public readonly bgpState: string;
```

- *Type:* string

---

##### `customerBgpAsn`<sup>Required</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```typescript
public readonly customerBgpAsn: string;
```

- *Type:* string

---

##### `customerInterfaceIp`<sup>Required</sup> <a name="customerInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```typescript
public readonly customerInterfaceIp: string;
```

- *Type:* string

---

##### `customerInterfaceIpv6`<sup>Required</sup> <a name="customerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```typescript
public readonly customerInterfaceIpv6: string;
```

- *Type:* string

---

##### `oracleBgpAsn`<sup>Required</sup> <a name="oracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```typescript
public readonly oracleBgpAsn: string;
```

- *Type:* string

---

##### `oracleInterfaceIp`<sup>Required</sup> <a name="oracleInterfaceIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```typescript
public readonly oracleInterfaceIp: string;
```

- *Type:* string

---

##### `oracleInterfaceIpv6`<sup>Required</sup> <a name="oracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```typescript
public readonly oracleInterfaceIpv6: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdMode">dpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dpdMode`<sup>Required</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdMode"></a>

```typescript
public readonly dpdMode: string;
```

- *Type:* string

---

##### `dpdTimeoutInSec`<sup>Required</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```typescript
public readonly dpdTimeoutInSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">cpeTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">oracleTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpeTrafficSelector`<sup>Required</sup> <a name="cpeTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```typescript
public readonly cpeTrafficSelector: string[];
```

- *Type:* string[]

---

##### `oracleTrafficSelector`<sup>Required</sup> <a name="oracleTrafficSelector" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```typescript
public readonly oracleTrafficSelector: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.associatedVirtualCircuits">associatedVirtualCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.bgpSessionInfo">bgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.cpeIp">cpeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdConfig">dpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdMode">dpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.encryptionDomainConfig">encryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ikeVersion">ikeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ipsecId">ipsecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.natTranslationEnabled">natTranslationEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.oracleCanInitiate">oracleCanInitiate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseOneDetails">phaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseTwoDetails">phaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.routing">routing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.vpnIp">vpnIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associatedVirtualCircuits`<sup>Required</sup> <a name="associatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.associatedVirtualCircuits"></a>

```typescript
public readonly associatedVirtualCircuits: string[];
```

- *Type:* string[]

---

##### `bgpSessionInfo`<sup>Required</sup> <a name="bgpSessionInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.bgpSessionInfo"></a>

```typescript
public readonly bgpSessionInfo: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpeIp`<sup>Required</sup> <a name="cpeIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.cpeIp"></a>

```typescript
public readonly cpeIp: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dpdConfig`<sup>Required</sup> <a name="dpdConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdConfig"></a>

```typescript
public readonly dpdConfig: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList</a>

---

##### `dpdMode`<sup>Required</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdMode"></a>

```typescript
public readonly dpdMode: string;
```

- *Type:* string

---

##### `dpdTimeoutInSec`<sup>Required</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.dpdTimeoutInSec"></a>

```typescript
public readonly dpdTimeoutInSec: number;
```

- *Type:* number

---

##### `encryptionDomainConfig`<sup>Required</sup> <a name="encryptionDomainConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.encryptionDomainConfig"></a>

```typescript
public readonly encryptionDomainConfig: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: string;
```

- *Type:* string

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

---

##### `natTranslationEnabled`<sup>Required</sup> <a name="natTranslationEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.natTranslationEnabled"></a>

```typescript
public readonly natTranslationEnabled: string;
```

- *Type:* string

---

##### `oracleCanInitiate`<sup>Required</sup> <a name="oracleCanInitiate" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.oracleCanInitiate"></a>

```typescript
public readonly oracleCanInitiate: string;
```

- *Type:* string

---

##### `phaseOneDetails`<sup>Required</sup> <a name="phaseOneDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseOneDetails"></a>

```typescript
public readonly phaseOneDetails: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList</a>

---

##### `phaseTwoDetails`<sup>Required</sup> <a name="phaseTwoDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.phaseTwoDetails"></a>

```typescript
public readonly phaseTwoDetails: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.routing"></a>

```typescript
public readonly routing: string;
```

- *Type:* string

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.timeStatusUpdated"></a>

```typescript
public readonly timeStatusUpdated: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `vpnIp`<sup>Required</sup> <a name="vpnIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.vpnIp"></a>

```typescript
public readonly vpnIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customDhGroup">customDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">isCustomPhaseOneConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isIkeEstablished">isIkeEstablished</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedDhGroup">negotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetime">remainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeInt">remainingLifetimeInt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">remainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAuthenticationAlgorithm`<sup>Required</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```typescript
public readonly customAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `customDhGroup`<sup>Required</sup> <a name="customDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```typescript
public readonly customDhGroup: string;
```

- *Type:* string

---

##### `customEncryptionAlgorithm`<sup>Required</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```typescript
public readonly customEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `isCustomPhaseOneConfig`<sup>Required</sup> <a name="isCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```typescript
public readonly isCustomPhaseOneConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIkeEstablished`<sup>Required</sup> <a name="isIkeEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```typescript
public readonly isIkeEstablished: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `negotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="negotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```typescript
public readonly negotiatedAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `negotiatedDhGroup`<sup>Required</sup> <a name="negotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```typescript
public readonly negotiatedDhGroup: string;
```

- *Type:* string

---

##### `negotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="negotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```typescript
public readonly negotiatedEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `remainingLifetime`<sup>Required</sup> <a name="remainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```typescript
public readonly remainingLifetime: string;
```

- *Type:* string

---

##### `remainingLifetimeInt`<sup>Required</sup> <a name="remainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```typescript
public readonly remainingLifetimeInt: number;
```

- *Type:* number

---

##### `remainingLifetimeLastRetrieved`<sup>Required</sup> <a name="remainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```typescript
public readonly remainingLifetimeLastRetrieved: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails</a>

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get"></a>

```typescript
public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference <a name="DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreIpsecConnectionTunnels } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.dhGroup">dhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">isCustomPhaseTwoConfig</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isEspEstablished">isEspEstablished</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isPfsEnabled">isPfsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">negotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetime">remainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">remainingLifetimeInt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">remainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAuthenticationAlgorithm`<sup>Required</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```typescript
public readonly customAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `customEncryptionAlgorithm`<sup>Required</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```typescript
public readonly customEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```typescript
public readonly dhGroup: string;
```

- *Type:* string

---

##### `isCustomPhaseTwoConfig`<sup>Required</sup> <a name="isCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```typescript
public readonly isCustomPhaseTwoConfig: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEspEstablished`<sup>Required</sup> <a name="isEspEstablished" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```typescript
public readonly isEspEstablished: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPfsEnabled`<sup>Required</sup> <a name="isPfsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```typescript
public readonly isPfsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `negotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="negotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```typescript
public readonly negotiatedAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `negotiatedDhGroup`<sup>Required</sup> <a name="negotiatedDhGroup" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```typescript
public readonly negotiatedDhGroup: string;
```

- *Type:* string

---

##### `negotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="negotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```typescript
public readonly negotiatedEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `remainingLifetime`<sup>Required</sup> <a name="remainingLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```typescript
public readonly remainingLifetime: string;
```

- *Type:* string

---

##### `remainingLifetimeInt`<sup>Required</sup> <a name="remainingLifetimeInt" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```typescript
public readonly remainingLifetimeInt: number;
```

- *Type:* number

---

##### `remainingLifetimeLastRetrieved`<sup>Required</sup> <a name="remainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```typescript
public readonly remainingLifetimeLastRetrieved: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnels.DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails">DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails</a>

---



