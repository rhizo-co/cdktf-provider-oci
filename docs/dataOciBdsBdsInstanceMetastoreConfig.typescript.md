# `dataOciBdsBdsInstanceMetastoreConfig` Submodule <a name="`dataOciBdsBdsInstanceMetastoreConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceMetastoreConfig <a name="DataOciBdsBdsInstanceMetastoreConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config oci_bds_bds_instance_metastore_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceMetastoreConfig } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig(scope: Construct, id: string, config: DataOciBdsBdsInstanceMetastoreConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig">DataOciBdsBdsInstanceMetastoreConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig">DataOciBdsBdsInstanceMetastoreConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isConstruct"></a>

```typescript
import { dataOciBdsBdsInstanceMetastoreConfig } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformElement"></a>

```typescript
import { dataOciBdsBdsInstanceMetastoreConfig } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformDataSource"></a>

```typescript
import { dataOciBdsBdsInstanceMetastoreConfig } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport"></a>

```typescript
import { dataOciBdsBdsInstanceMetastoreConfig } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceMetastoreConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceMetastoreConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceMetastoreConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.activateTrigger">activateTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsApiKeyId">bdsApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase">bdsApiKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreType">metastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreConfigIdInput">metastoreConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreConfigId">metastoreConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `activateTrigger`<sup>Required</sup> <a name="activateTrigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.activateTrigger"></a>

```typescript
public readonly activateTrigger: number;
```

- *Type:* number

---

##### `bdsApiKeyId`<sup>Required</sup> <a name="bdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsApiKeyId"></a>

```typescript
public readonly bdsApiKeyId: string;
```

- *Type:* string

---

##### `bdsApiKeyPassphrase`<sup>Required</sup> <a name="bdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase"></a>

```typescript
public readonly bdsApiKeyPassphrase: string;
```

- *Type:* string

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.clusterAdminPassword"></a>

```typescript
public readonly clusterAdminPassword: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreType"></a>

```typescript
public readonly metastoreType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `metastoreConfigIdInput`<sup>Optional</sup> <a name="metastoreConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreConfigIdInput"></a>

```typescript
public readonly metastoreConfigIdInput: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `metastoreConfigId`<sup>Required</sup> <a name="metastoreConfigId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreConfigId"></a>

```typescript
public readonly metastoreConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceMetastoreConfigConfig <a name="DataOciBdsBdsInstanceMetastoreConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceMetastoreConfig } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceMetastoreConfigConfig: dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#bds_instance_id DataOciBdsBdsInstanceMetastoreConfig#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.metastoreConfigId">metastoreConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#metastore_config_id DataOciBdsBdsInstanceMetastoreConfig#metastore_config_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#bds_instance_id DataOciBdsBdsInstanceMetastoreConfig#bds_instance_id}.

---

##### `metastoreConfigId`<sup>Required</sup> <a name="metastoreConfigId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.metastoreConfigId"></a>

```typescript
public readonly metastoreConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#metastore_config_id DataOciBdsBdsInstanceMetastoreConfig#metastore_config_id}.

---



