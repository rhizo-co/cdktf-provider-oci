# `dataOciBlockchainBlockchainPlatformPatches` Submodule <a name="`dataOciBlockchainBlockchainPlatformPatches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatformPatches <a name="DataOciBlockchainBlockchainPlatformPatches" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches oci_blockchain_blockchain_platform_patches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches(scope: Construct, id: string, config: DataOciBlockchainBlockchainPlatformPatchesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig">DataOciBlockchainBlockchainPlatformPatchesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig">DataOciBlockchainBlockchainPlatformPatchesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciBlockchainBlockchainPlatformPatchesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatformPatches resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatformPatches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatformPatches to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBlockchainBlockchainPlatformPatches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatformPatches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformPatchCollection">blockchainPlatformPatchCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList">DataOciBlockchainBlockchainPlatformPatchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformIdInput">blockchainPlatformIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformId">blockchainPlatformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `blockchainPlatformPatchCollection`<sup>Required</sup> <a name="blockchainPlatformPatchCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformPatchCollection"></a>

```typescript
public readonly blockchainPlatformPatchCollection: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filter"></a>

```typescript
public readonly filter: DataOciBlockchainBlockchainPlatformPatchesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList">DataOciBlockchainBlockchainPlatformPatchesFilterList</a>

---

##### `blockchainPlatformIdInput`<sup>Optional</sup> <a name="blockchainPlatformIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformIdInput"></a>

```typescript
public readonly blockchainPlatformIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciBlockchainBlockchainPlatformPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `blockchainPlatformId`<sup>Required</sup> <a name="blockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformId"></a>

```typescript
public readonly blockchainPlatformId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection: dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection = { ... }
```


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems: dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems = { ... }
```


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems: dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems = { ... }
```


### DataOciBlockchainBlockchainPlatformPatchesConfig <a name="DataOciBlockchainBlockchainPlatformPatchesConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformPatchesConfig: dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.blockchainPlatformId">blockchainPlatformId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#blockchain_platform_id DataOciBlockchainBlockchainPlatformPatches#blockchain_platform_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#id DataOciBlockchainBlockchainPlatformPatches#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blockchainPlatformId`<sup>Required</sup> <a name="blockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.blockchainPlatformId"></a>

```typescript
public readonly blockchainPlatformId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#blockchain_platform_id DataOciBlockchainBlockchainPlatformPatches#blockchain_platform_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciBlockchainBlockchainPlatformPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#filter DataOciBlockchainBlockchainPlatformPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#id DataOciBlockchainBlockchainPlatformPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBlockchainBlockchainPlatformPatchesFilter <a name="DataOciBlockchainBlockchainPlatformPatchesFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformPatchesFilter: dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#name DataOciBlockchainBlockchainPlatformPatches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#values DataOciBlockchainBlockchainPlatformPatches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#regex DataOciBlockchainBlockchainPlatformPatches#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#name DataOciBlockchainBlockchainPlatformPatches#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#values DataOciBlockchainBlockchainPlatformPatches#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#regex DataOciBlockchainBlockchainPlatformPatches#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.patchInfoUrl">patchInfoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.serviceVersion">serviceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.timePatchDue">timePatchDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `patchInfoUrl`<sup>Required</sup> <a name="patchInfoUrl" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.patchInfoUrl"></a>

```typescript
public readonly patchInfoUrl: string;
```

- *Type:* string

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.serviceVersion"></a>

```typescript
public readonly serviceVersion: string;
```

- *Type:* string

---

##### `timePatchDue`<sup>Required</sup> <a name="timePatchDue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.timePatchDue"></a>

```typescript
public readonly timePatchDue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems</a>

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems</a>

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection</a>

---


### DataOciBlockchainBlockchainPlatformPatchesFilterList <a name="DataOciBlockchainBlockchainPlatformPatchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBlockchainBlockchainPlatformPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>[]

---


### DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatformPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBlockchainBlockchainPlatformPatchesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter">DataOciBlockchainBlockchainPlatformPatchesFilter</a>

---



