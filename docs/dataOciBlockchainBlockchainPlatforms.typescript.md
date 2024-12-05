# `dataOciBlockchainBlockchainPlatforms` Submodule <a name="`dataOciBlockchainBlockchainPlatforms` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatforms <a name="DataOciBlockchainBlockchainPlatforms" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms oci_blockchain_blockchain_platforms}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms(scope: Construct, id: string, config: DataOciBlockchainBlockchainPlatformsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig">DataOciBlockchainBlockchainPlatformsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig">DataOciBlockchainBlockchainPlatformsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciBlockchainBlockchainPlatformsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatforms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBlockchainBlockchainPlatforms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatforms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection">blockchainPlatformCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `blockchainPlatformCollection`<sup>Required</sup> <a name="blockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection"></a>

```typescript
public readonly blockchainPlatformCollection: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter"></a>

```typescript
public readonly filter: DataOciBlockchainBlockchainPlatformsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciBlockchainBlockchainPlatformsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection = { ... }
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems = { ... }
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails = { ... }
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns = { ... }
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam = { ... }
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers = { ... }
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam = { ... }
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo = { ... }
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas = { ... }
```


### DataOciBlockchainBlockchainPlatformsConfig <a name="DataOciBlockchainBlockchainPlatformsConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsConfig: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciBlockchainBlockchainPlatformsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#filter DataOciBlockchainBlockchainPlatforms#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}.

---

### DataOciBlockchainBlockchainPlatformsFilter <a name="DataOciBlockchainBlockchainPlatformsFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

const dataOciBlockchainBlockchainPlatformsFilter: dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```typescript
public readonly ocpuAllocationNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad">ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey">osnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad"></a>

```typescript
public readonly ad: string;
```

- *Type:* string

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```typescript
public readonly ocpuAllocationParam: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `osnKey`<sup>Required</sup> <a name="osnKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey"></a>

```typescript
public readonly osnKey: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns">osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers">peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osns`<sup>Required</sup> <a name="osns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns"></a>

```typescript
public readonly osns: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers"></a>

```typescript
public readonly peers: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```typescript
public readonly ocpuAllocationNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad">ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey">peerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad"></a>

```typescript
public readonly ad: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```typescript
public readonly ocpuAllocationParam: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `peerKey`<sup>Required</sup> <a name="peerKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey"></a>

```typescript
public readonly peerKey: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">ocpuCapacityNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">ocpuUtilizationNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ocpuCapacityNumber`<sup>Required</sup> <a name="ocpuCapacityNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```typescript
public readonly ocpuCapacityNumber: number;
```

- *Type:* number

---

##### `ocpuUtilizationNumber`<sup>Required</sup> <a name="ocpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```typescript
public readonly ocpuUtilizationNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText">caCertArchiveText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails">componentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape">computeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId">federatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo">hostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken">idcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol">isByol</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd">isMultiAd</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape">loadBalancerShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole">platformRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType">platformShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint">serviceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion">serviceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs">storageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs">storageUsedInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity">totalOcpuCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertArchiveText`<sup>Required</sup> <a name="caCertArchiveText" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText"></a>

```typescript
public readonly caCertArchiveText: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `componentDetails`<sup>Required</sup> <a name="componentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails"></a>

```typescript
public readonly componentDetails: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a>

---

##### `computeShape`<sup>Required</sup> <a name="computeShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape"></a>

```typescript
public readonly computeShape: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `federatedUserId`<sup>Required</sup> <a name="federatedUserId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId"></a>

```typescript
public readonly federatedUserId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostOcpuUtilizationInfo`<sup>Required</sup> <a name="hostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo"></a>

```typescript
public readonly hostOcpuUtilizationInfo: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken"></a>

```typescript
public readonly idcsAccessToken: string;
```

- *Type:* string

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol"></a>

```typescript
public readonly isByol: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isMultiAd`<sup>Required</sup> <a name="isMultiAd" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd"></a>

```typescript
public readonly isMultiAd: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `loadBalancerShape`<sup>Required</sup> <a name="loadBalancerShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape"></a>

```typescript
public readonly loadBalancerShape: string;
```

- *Type:* string

---

##### `platformRole`<sup>Required</sup> <a name="platformRole" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole"></a>

```typescript
public readonly platformRole: string;
```

- *Type:* string

---

##### `platformShapeType`<sup>Required</sup> <a name="platformShapeType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType"></a>

```typescript
public readonly platformShapeType: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas"></a>

```typescript
public readonly replicas: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a>

---

##### `serviceEndpoint`<sup>Required</sup> <a name="serviceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint"></a>

```typescript
public readonly serviceEndpoint: string;
```

- *Type:* string

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion"></a>

```typescript
public readonly serviceVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageSizeInTbs`<sup>Required</sup> <a name="storageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs"></a>

```typescript
public readonly storageSizeInTbs: number;
```

- *Type:* number

---

##### `storageUsedInTbs`<sup>Required</sup> <a name="storageUsedInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs"></a>

```typescript
public readonly storageUsedInTbs: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalOcpuCapacity`<sup>Required</sup> <a name="totalOcpuCapacity" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity"></a>

```typescript
public readonly totalOcpuCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount">caCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount">consoleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount">proxyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCount`<sup>Required</sup> <a name="caCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount"></a>

```typescript
public readonly caCount: number;
```

- *Type:* number

---

##### `consoleCount`<sup>Required</sup> <a name="consoleCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount"></a>

```typescript
public readonly consoleCount: number;
```

- *Type:* number

---

##### `proxyCount`<sup>Required</sup> <a name="proxyCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount"></a>

```typescript
public readonly proxyCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a>

---


### DataOciBlockchainBlockchainPlatformsFilterList <a name="DataOciBlockchainBlockchainPlatformsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get"></a>

```typescript
public get(index: number): DataOciBlockchainBlockchainPlatformsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBlockchainBlockchainPlatformsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>[]

---


### DataOciBlockchainBlockchainPlatformsFilterOutputReference <a name="DataOciBlockchainBlockchainPlatformsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciBlockchainBlockchainPlatforms } from 'rhizo-co-terraform-provider-oci'

new dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciBlockchainBlockchainPlatformsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>

---



