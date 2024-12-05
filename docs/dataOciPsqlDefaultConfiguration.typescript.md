# `dataOciPsqlDefaultConfiguration` Submodule <a name="`dataOciPsqlDefaultConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDefaultConfiguration <a name="DataOciPsqlDefaultConfiguration" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration oci_psql_default_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration(scope: Construct, id: string, config: DataOciPsqlDefaultConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig">DataOciPsqlDefaultConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig">DataOciPsqlDefaultConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciPsqlDefaultConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isConstruct"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformElement"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformDataSource"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciPsqlDefaultConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciPsqlDefaultConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciPsqlDefaultConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDefaultConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList">DataOciPsqlDefaultConfigurationConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.isFlexible">isFlexible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.defaultConfigurationIdInput">defaultConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.defaultConfigurationId">defaultConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.configurationDetails"></a>

```typescript
public readonly configurationDetails: DataOciPsqlDefaultConfigurationConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList">DataOciPsqlDefaultConfigurationConfigurationDetailsList</a>

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `instanceMemorySizeInGbs`<sup>Required</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.instanceMemorySizeInGbs"></a>

```typescript
public readonly instanceMemorySizeInGbs: number;
```

- *Type:* number

---

##### `instanceOcpuCount`<sup>Required</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.instanceOcpuCount"></a>

```typescript
public readonly instanceOcpuCount: number;
```

- *Type:* number

---

##### `isFlexible`<sup>Required</sup> <a name="isFlexible" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.isFlexible"></a>

```typescript
public readonly isFlexible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `defaultConfigurationIdInput`<sup>Optional</sup> <a name="defaultConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.defaultConfigurationIdInput"></a>

```typescript
public readonly defaultConfigurationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `defaultConfigurationId`<sup>Required</sup> <a name="defaultConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.defaultConfigurationId"></a>

```typescript
public readonly defaultConfigurationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDefaultConfigurationConfig <a name="DataOciPsqlDefaultConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.Initializer"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDefaultConfigurationConfig: dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.defaultConfigurationId">defaultConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#default_configuration_id DataOciPsqlDefaultConfiguration#default_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#id DataOciPsqlDefaultConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultConfigurationId`<sup>Required</sup> <a name="defaultConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.defaultConfigurationId"></a>

```typescript
public readonly defaultConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#default_configuration_id DataOciPsqlDefaultConfiguration#default_configuration_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#id DataOciPsqlDefaultConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciPsqlDefaultConfigurationConfigurationDetails <a name="DataOciPsqlDefaultConfigurationConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails.Initializer"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDefaultConfigurationConfigurationDetails: dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails = { ... }
```


### DataOciPsqlDefaultConfigurationConfigurationDetailsItems <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems.Initializer"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciPsqlDefaultConfigurationConfigurationDetailsItems: dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.allowedValues">allowedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.configKey">configKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.defaultConfigValue">defaultConfigValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.isOverridable">isOverridable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.isRestartRequired">isRestartRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems">DataOciPsqlDefaultConfigurationConfigurationDetailsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string;
```

- *Type:* string

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.configKey"></a>

```typescript
public readonly configKey: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultConfigValue`<sup>Required</sup> <a name="defaultConfigValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.defaultConfigValue"></a>

```typescript
public readonly defaultConfigValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isOverridable`<sup>Required</sup> <a name="isOverridable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.isOverridable"></a>

```typescript
public readonly isOverridable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRestartRequired`<sup>Required</sup> <a name="isRestartRequired" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.isRestartRequired"></a>

```typescript
public readonly isRestartRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDefaultConfigurationConfigurationDetailsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems">DataOciPsqlDefaultConfigurationConfigurationDetailsItems</a>

---


### DataOciPsqlDefaultConfigurationConfigurationDetailsList <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciPsqlDefaultConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails">DataOciPsqlDefaultConfigurationConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciPsqlDefaultConfigurationConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails">DataOciPsqlDefaultConfigurationConfigurationDetails</a>

---



