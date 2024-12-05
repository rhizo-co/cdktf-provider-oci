# `dataOciCoreFastConnectProviderServiceKey` Submodule <a name="`dataOciCoreFastConnectProviderServiceKey` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreFastConnectProviderServiceKey <a name="DataOciCoreFastConnectProviderServiceKey" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key oci_core_fast_connect_provider_service_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServiceKey } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey(scope: Construct, id: string, config: DataOciCoreFastConnectProviderServiceKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig">DataOciCoreFastConnectProviderServiceKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig">DataOciCoreFastConnectProviderServiceKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreFastConnectProviderServiceKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isConstruct"></a>

```typescript
import { dataOciCoreFastConnectProviderServiceKey } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isTerraformElement"></a>

```typescript
import { dataOciCoreFastConnectProviderServiceKey } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isTerraformDataSource"></a>

```typescript
import { dataOciCoreFastConnectProviderServiceKey } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.generateConfigForImport"></a>

```typescript
import { dataOciCoreFastConnectProviderServiceKey } from 'rhizo-co-terraform-provider-oci'

dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreFastConnectProviderServiceKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreFastConnectProviderServiceKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreFastConnectProviderServiceKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreFastConnectProviderServiceKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.bandwidthShapeName">bandwidthShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.peeringLocation">peeringLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.providerServiceIdInput">providerServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.providerServiceKeyNameInput">providerServiceKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.providerServiceKeyName">providerServiceKeyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bandwidthShapeName`<sup>Required</sup> <a name="bandwidthShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.bandwidthShapeName"></a>

```typescript
public readonly bandwidthShapeName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peeringLocation`<sup>Required</sup> <a name="peeringLocation" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.peeringLocation"></a>

```typescript
public readonly peeringLocation: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerServiceIdInput`<sup>Optional</sup> <a name="providerServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.providerServiceIdInput"></a>

```typescript
public readonly providerServiceIdInput: string;
```

- *Type:* string

---

##### `providerServiceKeyNameInput`<sup>Optional</sup> <a name="providerServiceKeyNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.providerServiceKeyNameInput"></a>

```typescript
public readonly providerServiceKeyNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

---

##### `providerServiceKeyName`<sup>Required</sup> <a name="providerServiceKeyName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.providerServiceKeyName"></a>

```typescript
public readonly providerServiceKeyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreFastConnectProviderServiceKeyConfig <a name="DataOciCoreFastConnectProviderServiceKeyConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.Initializer"></a>

```typescript
import { dataOciCoreFastConnectProviderServiceKey } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreFastConnectProviderServiceKeyConfig: dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#provider_service_id DataOciCoreFastConnectProviderServiceKey#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.providerServiceKeyName">providerServiceKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#provider_service_key_name DataOciCoreFastConnectProviderServiceKey#provider_service_key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#id DataOciCoreFastConnectProviderServiceKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#provider_service_id DataOciCoreFastConnectProviderServiceKey#provider_service_id}.

---

##### `providerServiceKeyName`<sup>Required</sup> <a name="providerServiceKeyName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.providerServiceKeyName"></a>

```typescript
public readonly providerServiceKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#provider_service_key_name DataOciCoreFastConnectProviderServiceKey#provider_service_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderServiceKey.DataOciCoreFastConnectProviderServiceKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service_key#id DataOciCoreFastConnectProviderServiceKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



