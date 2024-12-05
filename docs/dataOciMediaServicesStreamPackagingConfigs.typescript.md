# `dataOciMediaServicesStreamPackagingConfigs` Submodule <a name="`dataOciMediaServicesStreamPackagingConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamPackagingConfigs <a name="DataOciMediaServicesStreamPackagingConfigs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs oci_media_services_stream_packaging_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs(scope: Construct, id: string, config: DataOciMediaServicesStreamPackagingConfigsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig">DataOciMediaServicesStreamPackagingConfigsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig">DataOciMediaServicesStreamPackagingConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetStreamPackagingConfigId">resetStreamPackagingConfigId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMediaServicesStreamPackagingConfigsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStreamPackagingConfigId` <a name="resetStreamPackagingConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetStreamPackagingConfigId"></a>

```typescript
public resetStreamPackagingConfigId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesStreamPackagingConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesStreamPackagingConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamPackagingConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList">DataOciMediaServicesStreamPackagingConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigCollection">streamPackagingConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelIdInput">distributionChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigIdInput">streamPackagingConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelId">distributionChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigId">streamPackagingConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filter"></a>

```typescript
public readonly filter: DataOciMediaServicesStreamPackagingConfigsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList">DataOciMediaServicesStreamPackagingConfigsFilterList</a>

---

##### `streamPackagingConfigCollection`<sup>Required</sup> <a name="streamPackagingConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigCollection"></a>

```typescript
public readonly streamPackagingConfigCollection: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `distributionChannelIdInput`<sup>Optional</sup> <a name="distributionChannelIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelIdInput"></a>

```typescript
public readonly distributionChannelIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMediaServicesStreamPackagingConfigsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `streamPackagingConfigIdInput`<sup>Optional</sup> <a name="streamPackagingConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigIdInput"></a>

```typescript
public readonly streamPackagingConfigIdInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelId"></a>

```typescript
public readonly distributionChannelId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streamPackagingConfigId`<sup>Required</sup> <a name="streamPackagingConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigId"></a>

```typescript
public readonly streamPackagingConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamPackagingConfigsConfig <a name="DataOciMediaServicesStreamPackagingConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigsConfig: dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#distribution_channel_id DataOciMediaServicesStreamPackagingConfigs#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#display_name DataOciMediaServicesStreamPackagingConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#id DataOciMediaServicesStreamPackagingConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#state DataOciMediaServicesStreamPackagingConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.streamPackagingConfigId">streamPackagingConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfigs#stream_packaging_config_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.distributionChannelId"></a>

```typescript
public readonly distributionChannelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#distribution_channel_id DataOciMediaServicesStreamPackagingConfigs#distribution_channel_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#display_name DataOciMediaServicesStreamPackagingConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMediaServicesStreamPackagingConfigsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#filter DataOciMediaServicesStreamPackagingConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#id DataOciMediaServicesStreamPackagingConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#state DataOciMediaServicesStreamPackagingConfigs#state}.

---

##### `streamPackagingConfigId`<sup>Optional</sup> <a name="streamPackagingConfigId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.streamPackagingConfigId"></a>

```typescript
public readonly streamPackagingConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfigs#stream_packaging_config_id}.

---

### DataOciMediaServicesStreamPackagingConfigsFilter <a name="DataOciMediaServicesStreamPackagingConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigsFilter: dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#name DataOciMediaServicesStreamPackagingConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#values DataOciMediaServicesStreamPackagingConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#regex DataOciMediaServicesStreamPackagingConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#name DataOciMediaServicesStreamPackagingConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#values DataOciMediaServicesStreamPackagingConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#regex DataOciMediaServicesStreamPackagingConfigs#regex}.

---

### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection: dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection = { ... }
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems: dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems = { ... }
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption: dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption = { ... }
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks: dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamPackagingConfigsFilterList <a name="DataOciMediaServicesStreamPackagingConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamPackagingConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesStreamPackagingConfigsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>[]

---


### DataOciMediaServicesStreamPackagingConfigsFilterOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesStreamPackagingConfigsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.distributionChannelId">distributionChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.segmentTimeInSeconds">segmentTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.streamPackagingFormat">streamPackagingFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.distributionChannelId"></a>

```typescript
public readonly distributionChannelId: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.encryption"></a>

```typescript
public readonly encryption: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList</a>

---

##### `segmentTimeInSeconds`<sup>Required</sup> <a name="segmentTimeInSeconds" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.segmentTimeInSeconds"></a>

```typescript
public readonly segmentTimeInSeconds: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streamPackagingFormat`<sup>Required</sup> <a name="streamPackagingFormat" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.streamPackagingFormat"></a>

```typescript
public readonly streamPackagingFormat: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesStreamPackagingConfigs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection</a>

---



